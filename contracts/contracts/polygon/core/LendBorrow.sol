// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LendBorrow is ChainlinkClient, Ownable {
    address[] public lenders;

    mapping(address => mapping(address => uint256)) public lendingBalance;
    mapping(address => uint256) public uniqueTokensLent;
    mapping(address => address) public tokenPriceFeedMapping;
    address[] allowedTokens;

    IERC20 public rupyaToken;
    IERC20 public usdcToken;
    address usdcTokenAddress;
    address rupyaTokenAddress;

    constructor(address _rupyaTokenAddress, address _usdcTokenAddress) {
        rupyaToken = IERC20(_rupyaTokenAddress);
        usdcToken = IERC20(_usdcTokenAddress);
        rupyaTokenAddress = _rupyaTokenAddress;
        usdcTokenAddress = _usdcTokenAddress;
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

    // mapping(address => )
    address[] userAddress;
    uint256[] userAmount;
    uint256[] borrowDuration;
    bool[] claimed;
    mapping(address => uint256[]) public entriesForUser;

    struct Loan{
        address token;
        uint256 principal;
        uint256 totalAmount;
        uint256 duration;
        uint256 noOfApprovals;
        bool repaid;
        bool approved;
        string ipfsHash;
    }

    mapping(address => Loan[]) userToLoanMapper;
    mapping(address => uint256[]) userLoanIndexMapper;

    event newLoanRequest(address user, uint256 index, string ipfsHash);


    function createBorrowRequest(uint256 principal, uint256 duration, address token, uint256 totalAmount, string memory ipfsHash) public {
        Loan memory newLoan = Loan(
            token,
            principal,
            totalAmount,
            duration,
            0,
            false,
            false,
            ipfsHash
        );
        userToLoanMapper[msg.sender].push(newLoan);
        userLoanIndexMapper[msg.sender].push(userToLoanMapper[msg.sender].length - 1);
        emit newLoanRequest(msg.sender, userToLoanMapper[msg.sender].length - 1, ipfsHash);
    }

    function approveBorrowRequest(address user, uint256 index) public {
        userToLoanMapper[user][index].noOfApprovals = userToLoanMapper[user][index].noOfApprovals + 1;
        if(userToLoanMapper[user][index].noOfApprovals == 2){
            userToLoanMapper[user][index].approved = true;
        }
    }

    function getApprovalStatus(uint256 index) public view returns(bool) {
        return userToLoanMapper[msg.sender][index].approved;
    }

    function lendMoney(uint256 index) public {
        require(userToLoanMapper[msg.sender][index].approved == true);
        usdcToken.transfer(msg.sender, userToLoanMapper[msg.sender][index].principal);
    }
}