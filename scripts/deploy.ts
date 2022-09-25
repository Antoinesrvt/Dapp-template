import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    //Deploy Info
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    // Deploy contract
    const CIDStorage = await ethers.getContractFactory("Contract");
    const cidStorage = await CIDStorage.deploy();
    await cidStorage.deployed();
    console.log("Contract contract_name deployed to:", cidStorage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});