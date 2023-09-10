const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the Token Contract
  const tokenAContract = await hre.ethers.deployContract("TokenA");
  await tokenAContract.waitForDeployment();
  console.log("Token deployed to:", tokenAContract.target);

  const tokenBContract = await hre.ethers.deployContract("TokenB");
  await tokenBContract.waitForDeployment();
  console.log("Token deployed to:", tokenBContract.target);

  // Deploy the Exchange Contract
  // const exchangeContract = await hre.ethers.deployContract("Exchange", []
  //   tokenContract.target,
  // ]);
  // await exchangeContract.waitForDeployment();
  // console.log("Exchange deployed to:", exchangeContract.target);

  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan
  await hre.run("verify:verify", {
    address: tokenAContract.target,
    constructorArguments: [],
    contract: "contracts/TokenA.sol:TokenA",
  });

  await hre.run("verify:verify", {
    address: tokenBContract.target,
    constructorArguments: [],
    contract: "contracts/TokenB.sol:TokenB",
  });

  // await hre.run("verify:verify", {
  //   address: exchangeContract.target,
  //   constructorArguments: [tokenContract.target],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});