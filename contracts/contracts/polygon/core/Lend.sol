// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Lend is ChainlinkClient, Ownable {
    address[] public lenders;

    mapping(address => mapping(address => uint256)) public lendingBalance;
    mapping(address => uint256) public uniqueTokensLent;
    mapping(address => address) public tokenPriceFeedMapping;
    address[] allowedTokens;

    IERC20 public rupyaToken;

    constructor(address _rupyaTokenAddress) {
        rupyaToken = IERC20(_rupyaTokenAddress);
    }

    function addAllowedTokens(address token) public onlyOwner {
        allowedTokens.push(token);
    }

    function setPriceFeedContract(address token, address priceFeed) public onlyOwner {
        tokenPriceFeedMapping[token] = priceFeed;
    }

    function lendTokens(uint256 _amount, address token) public {
        require(_amount > 0, "amount cannot be 0");
        if (tokenIsAllowed(token)) {
            updateUniqueTokensLent(msg.sender, token);
            IERC20(token).transferFrom(msg.sender, address(this), _amount);
            lendingBalance[token][msg.sender] =
                lendingBalance[token][msg.sender] +
                _amount;
            if (uniqueTokensLent[msg.sender] == 1) {
                lenders.push(msg.sender);
            }
        }
    }

    function withdrawTokens(uint256 _amount, address token) public {
        uint256 balance = lendingBalance[token][msg.sender];
        require(balance > 0, "lending balance cannot be 0");
        require(balance > _amount, "withdrawal balance cannot be less than lending balance");
        IERC20(token).transfer(msg.sender, _amount);
        lendingBalance[token][msg.sender] = balance - _amount;
        if(lendingBalance[token][msg.sender] == 0){
            uniqueTokensLent[msg.sender] = uniqueTokensLent[msg.sender] - 1;
        }
    }

    function getUserTokenValue(address user, address token) public view returns (uint256) {
        return lendingBalance[token][user];
    }

    function getUserTotalValue(address user) public view returns (uint256) {
        uint256 totalValue = 0;
        if (uniqueTokensLent[user] > 0) {
            for (
                uint256 allowedTokensIndex = 0;
                allowedTokensIndex < allowedTokens.length;
                allowedTokensIndex++
            ) {
                totalValue =
                    totalValue +
                    getUserLendingBalanceEthValue(
                        user,
                        allowedTokens[allowedTokensIndex]
                    );
            }
        }
        return totalValue;
    }


    function tokenIsAllowed(address token) public view returns (bool) {
        for (
            uint256 allowedTokensIndex = 0;
            allowedTokensIndex < allowedTokens.length;
            allowedTokensIndex++
        ) {
            if (allowedTokens[allowedTokensIndex] == token) {
                return true;
            }
        }
        return false;
    }

    function updateUniqueTokensLent(address user, address token) internal {
        if (lendingBalance[token][user] <= 0) {
            uniqueTokensLent[user] = uniqueTokensLent[user] + 1;
        }
    }

    function getUserLendingBalanceEthValue(address user, address token) public view returns (uint256) {
        if (uniqueTokensLent[user] <= 0) {
            return 0;
        }
        return
            (lendingBalance[token][user] * getTokenEthPrice(token)) / (10**18);
    }

    function getTokenEthPrice(address token) public view returns (uint256) {
        address priceFeedAddress = tokenPriceFeedMapping[token];
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return uint256(price);
    }

    function issueTokens() public onlyOwner {
        // Issue tokens to all lenders
        for (
            uint256 lendersIndex = 0;
            lendersIndex < lenders.length;
            lendersIndex++
        ) {
            address recipient = lenders[lendersIndex];
            rupyaToken.transfer(recipient, getUserTotalValue(recipient));
        }
    }
}