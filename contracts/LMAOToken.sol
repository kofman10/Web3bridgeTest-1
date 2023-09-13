// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LMAOToken is ERC20, Ownable {
    address public feeAddress;
    uint256 public feePercentage = 3; 

    constructor(address _feeAddress) ERC20("LMAO Token", "LMAO") {
        feeAddress = _feeAddress;
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }


    function transfer(address recipient, uint256 amount) public override returns (bool) {
        uint256 feeAmount = (amount * feePercentage) / 100;
        uint256 transferAmount = amount - feeAmount;

        _transfer(msg.sender, recipient, transferAmount);

        _transfer(msg.sender, feeAddress, feeAmount);

        return true;
    }

}
