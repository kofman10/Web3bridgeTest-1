// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LMAOToken is ERC20, Ownable {
    address public feeAddress;
    uint256 public feePercentage = 8; // 8% fee

    constructor(address _feeAddress) ERC20("LMAO Token", "LMAO") {
        feeAddress = _feeAddress;
    }

    // Function to set the fee address
    function setFeeAddress(address _newFeeAddress) external onlyOwner {
        feeAddress = _newFeeAddress;
    }

    // Function to set the fee percentage
    function setFeePercentage(uint256 _newFeePercentage) external onlyOwner {
        require(_newFeePercentage <= 100, "Fee percentage cannot exceed 100%");
        feePercentage = _newFeePercentage;
    }

    // Transfer function with a fee
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        uint256 feeAmount = (amount * feePercentage) / 100;
        uint256 transferAmount = amount - feeAmount;

        // Transfer tokens minus the fee
        _transfer(_msgSender(), recipient, transferAmount);

        // Transfer the fee to the fee address
        _transfer(_msgSender(), feeAddress, feeAmount);

        return true;
    }
}
