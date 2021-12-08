pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDCToken is ERC20 {
    constructor() ERC20("USD Coin", "USDC") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function faucet (address recipient , uint amount) external {
      _mint(recipient, amount * 10 ** decimals());
    }
}