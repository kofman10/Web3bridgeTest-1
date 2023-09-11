const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Deploy the Token Contract
  const NFTContract = await hre.ethers.deployContract("KofoNFT");
  await NFTContract.waitForDeployment();
  console.log("Token deployed to:", NFTContract.target);


  await sleep(30 * 1000);

  // Verify the contracts on Etherscan
  await hre.run("verify:verify", {
    address: NFTContract.target,
    constructorArguments: [],
    contract: "contracts/KofoNFT.sol:KofoNFT",
  });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});