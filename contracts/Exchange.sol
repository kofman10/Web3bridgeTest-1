// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./TokenA.sol";
import "./TokenB.sol";

error null_Address();

contract Exchange {

  TokenA public tokenAaddress;
    TokenB public tokenBaddress;

    struct LiquidityProvider {
        uint256 amountA;
        uint256 amountB;
    }

    mapping(address => LiquidityProvider) public liquidityProvider;
    
constructor(address tokenA, address tokenB){
    if(tokenA == address(0) && tokenB == address(0)) {
        revert null_Address();
    }
    tokenAaddress = TokenA(tokenA);
    tokenBaddress = TokenB(tokenB);
}

function getReserveA() public view returns (uint256) {
    return tokenAaddress.balanceOf(address(this));
}
function getReserveB() public view returns (uint256) {
    return tokenBaddress.balanceOf(address(this));
}
function addLiquidity(uint256 tokenAamount, uint256 tokenBamount) external {
      require(tokenAamount > 0 && tokenBamount > 0, "Amounts must be greater than zero");
    uint256 tokenAReserveBalance = getReserveA();
    uint256 tokenBeserveBalance = getReserveB();
    tokenAaddress.transferFrom(msg.sender, address(this), tokenAamount);
    tokenBaddress.transferFrom(msg.sender, address(this), tokenBamount);
    tokenAReserveBalance += tokenAamount;
    tokenBeserveBalance += tokenBamount;
    LiquidityProvider storage provider = liquidityProvider[msg.sender];
    provider.amountA += tokenAamount;
    provider.amountB += tokenBamount;
}

function removeLiquity(uint256 tokenAamount, uint256 tokenBamount) external {
      require(tokenAamount > 0 && tokenBamount > 0, "Amounts must be greater than zero");

    LiquidityProvider storage provider = liquidityProvider[msg.sender];
    require(provider.amountA >= tokenAamount && provider.amountB >= tokenBamount, "Insufficient liquidity");

    uint256 tokenAReserveBalance = getReserveA();
    uint256 tokenBeserveBalance = getReserveB();


    tokenAaddress.transfer(msg.sender, tokenAamount);
    tokenBaddress.transfer(msg.sender, tokenBamount);

    tokenAReserveBalance -= tokenAamount;
    tokenBeserveBalance -= tokenBamount;
    provider.amountA -= tokenAamount;
    provider.amountB -= tokenBamount;
}

function swapTokenAtoTokenB(uint256 tokenAamount) external returns(uint256){
    require(tokenAamount > 0, "tokenA must be greater than 0");
    //transfer amount to tokenA reserve
    tokenAaddress.transferFrom(msg.sender, address(this), tokenAamount);
    uint256 tokenAReserveBalance = getReserveA();
    uint256 tokenBReserveBalance = getReserveB();
  uint256 tokenBexpected = tokenBReserveBalance * tokenAamount / tokenAReserveBalance + tokenAamount;
    // tokenBReserveBalance += tokenAamount;
     tokenBaddress.transfer(msg.sender, tokenBexpected);
     return tokenBexpected;
}

function swapTokenBtoTokenA(uint256 tokenBamount) external returns(uint256){
      require(tokenBamount > 0, "tokenA must be greater than 0");
    //transfer amount to tokenA reserve
    tokenAaddress.transferFrom(msg.sender, address(this), tokenBamount);
    uint256 tokenAReserveBalance = getReserveA();
    uint256 tokenBReserveBalance = getReserveB();
    // (x * y) = k 
  uint256 tokenAexpected = tokenAReserveBalance * tokenBamount / tokenBReserveBalance + tokenBamount;
    // tokenBReserveBalance += tokenBamount;
     tokenBaddress.transfer(msg.sender, tokenAexpected);
     return tokenAexpected;
}

}