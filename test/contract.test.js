const { expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString());
const fromWei = (num) => ethers.utils.formatEther(num);

// Variables
let deployer, addr1, addr2, nft, marketplace;

// Tests
describe("MAJ_contract_name", function () {
  beforeEach(async () => {
    // Get accounts
    [deployer, addr1, addr2] = await ethers.getSigners();
    // Get contract
    const NFT = await ethers.getContractFactory("BlyToken");
    const Marketplace = await ethers.getContractFactory("Marketplace");
    //Deploy contract
    nft = await NFT.deploy();
    marketplace = await Marketplace.deploy(feePercent);
  });

  describe("First_Test", () => {
    it("Should be the first of the first", async () => {
    });
    it("Should be the second of the first", async () => {
    });
  });

  
});