// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./LMAOToken.sol";

contract WLMAOToken is ERC20, Ownable {
    LMAOToken public lmaoToken; 

    constructor(address _lmaoTokenAddress) ERC20("WLMAOToken", "WLMAO") {
        lmaoToken = LMAOToken(_lmaoTokenAddress); 
    }

    function deposit(uint256 amount) external payable {
        require(amount > 0, "Amount must be greater than zero");
        lmaoToken.transferFrom(msg.sender, address(this), amount);
        _mint(msg.sender, amount);  
    }

    // Function to withdraw WLMAO tokens
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        lmaoToken.transfer(msg.sender, amount);
    }

}
