import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    //Deploy Info
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    // Deploy contract
    const MAJ_contract_name = await ethers.getContractFactory("contract_name");
    const contract_name = await MAJ_contract_name.deploy();
    await contract_name.deployed();
    console.log("Contract contract_name deployed to:", contract_name.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});