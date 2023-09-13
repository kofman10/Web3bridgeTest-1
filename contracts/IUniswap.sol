// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

interface IUniswap{
   function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);

        function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
}
    interface IERC20 {
     function approve(address spender, uint rawAmount) external returns (bool);
     function balanceOf(address _owner) external view returns (uint256 balance);
}
interface IUniswapV2Factory {
   function getPair(address tokenA, address tokenB) external view returns (address pair);
}

interface IUniswapV2Pair {
     function approve(address spender, uint value) external returns (bool);
     function balanceOf(address owner) external view returns (uint);
}