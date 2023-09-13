const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the Token Contract
  const feeAddress = '0x5a170a835217017A34E6732d6eD7e3FD64276a71'
  const LMAOtokenContract = await hre.ethers.deployContract("LMAOToken", [feeAddress]);
  await LMAOtokenContract.waitForDeployment();
  console.log("LMAOToken deployed to:", LMAOtokenContract.target);

  // Deploy the Exchange Contract
  const WLMAOTokenContract = await hre.ethers.deployContract("WLMAOToken", [
    LMAOtokenContract.target,
  ]);
  await WLMAOTokenContract.waitForDeployment();
  console.log("WLMAOToken deployed to:", WLMAOTokenContract.target);

  // Wait for 30 seconds to let Etherscan catch up on contract deployments
  await sleep(30 * 1000);

  // Verify the contracts on Etherscan
  await hre.run("verify:verify", {
    address: LMAOtokenContract.target,
    constructorArguments: [feeAddress],
    contract: "contracts/LMAOToken.sol:LMAOToken",
  });

  await hre.run("verify:verify", {
    address: WLMAOTokenContract.target,
    constructorArguments: [LMAOtokenContract.target],
    contract: "contracts/WLMAOToken.sol:WLMAOToken",
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});