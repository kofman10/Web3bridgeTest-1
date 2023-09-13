const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {

  // Deploy the Exchange Contract
  const voteContract = await hre.ethers.deployContract("vote", []);
  await voteContract.waitForDeployment();
  console.log("vote deployed to:", voteContract.target);

  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan

  await hre.run("verify:verify", {
    address: voteContract.target,
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});