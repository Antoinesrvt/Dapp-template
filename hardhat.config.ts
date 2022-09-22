import "@nomiclabs/hardhat-waffle";

module.exports = {
  solidity: "0.8.14",
    networks: {
        hardhat: {
            chainId: 31337,
            initialBaseFeePerGas: 0,
        },
    },
    paths: {
        sources: "./contracts",
        artifacts: "./artifacts",
        cache: "./cache",
        tests: "./test",
    },
};
