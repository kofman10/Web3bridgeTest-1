const { ethers } = require("hardhat");

//to address is person adding liquidity
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {


  const uniswapAddr = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const uniswapFactory = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f";
  // const UNILPtokenAddress = '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11'
  const IMPERSONATOR = "0x20bB82F2Db6FF52b42c60cE79cDE4C7094Ce133F";
  const amountADesired = ethers.parseEther("1");
  const amountBDesired = ethers.parseEther("1");
  const amountAMin = ethers.parseEther("0");
  const amountBMin = ethers.parseEther("0");
  const signer = await ethers.getImpersonatedSigner(IMPERSONATOR);
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const deadline = currentTimestampInSeconds + 86400;

  const uniswap = await ethers.getContractAt("IUniswap", uniswapAddr);
  const uniContract = await ethers.getContractAt("IERC20", UNI);
  const DAIContract = await ethers.getContractAt("IERC20", DAI);
  await uniContract.connect(signer).approve(uniswapAddr, amountADesired);
  await DAIContract.connect(signer).approve(uniswapAddr, amountBDesired);
  const factory = await ethers.getContractAt(
    "IUniswapV2Factory",
    uniswapFactory
  );
  const pairAddress = await factory.getPair(UNI, DAI);
  const pairContract = await ethers.getContractAt("IUniswapV2Pair", pairAddress);
  console.log(pairAddress)
  const rawform = await pairContract.balanceOf(IMPERSONATOR)
  const pairBalanceSigner =  ethers.formatEther(
    await pairContract.balanceOf(IMPERSONATOR)
    );
    console.log("balance of signer normally", pairBalanceSigner);

  const res = await uniswap
    .connect(signer)
    .addLiquidity(
      UNI,
      DAI,
      amountADesired,
      amountBDesired,
      amountAMin,
      amountBMin,
      IMPERSONATOR,
      deadline
    );
    
    await sleep(10 * 1000)    

    console.log('raw form', rawform)
    console.log("balance of signer after adding liquidity", pairBalanceSigner);
  // approve

  // await pairContract.connect(tokenHolderSigner).approve(uniswap, pairBalanceSigner);
  const res2 = await uniswap
    .connect(signer)
    .removeLiquidity(
      UNI,
      DAI,
      rawform,
      amountAMin,
      amountBMin,
      IMPERSONATOR,
      deadline
    );
  await res2.wait();

  console.log("balance of signer after removing liquidity", pairBalanceSigner);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
