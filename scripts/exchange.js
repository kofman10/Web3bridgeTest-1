const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    const tokenA= '0xC92b5EaD612e535Cf322d7180e562f6DCaa9E867'
    const tokenB= '0x10498037Bf277d0b9D355d879D6992613913596d'

  const exchangeContract = await hre.ethers.deployContract("Exchange", [tokenA, tokenB]);
  await exchangeContract.waitForDeployment();
  console.log("Exchange deployed to:", exchangeContract.target);

  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan
//   await hre.run("verify:verify", {
//     address: tokenAContract.target,
//     constructorArguments: [],
//     contract: "contracts/TokenA.sol:TokenA",
//   });

//   await hre.run("verify:verify", {
//     address: tokenBContract.target,
//     constructorArguments: [],
//     contract: "contracts/TokenB.sol:TokenB",
//   });

  await hre.run("verify:verify", {
    address: exchangeContract.target,
    constructorArguments: [tokenA, tokenB],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});