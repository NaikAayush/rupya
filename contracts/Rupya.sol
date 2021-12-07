pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Rupya", "RUP") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function faucet (address recipient , uint amount) external {
      _mint(recipient, amount * 10 ** decimals());
    }
}