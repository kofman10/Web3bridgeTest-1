// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    constructor() ERC20("TokenA", "TOA") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
        function mint( uint256 amount) public {
        _mint(msg.sender, amount);
    }
}