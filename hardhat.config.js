require("@nomicfoundation/hardhat-toolbox");

const privateKey ="be5835f6e0204af42d24b052d455f8d7e66c1a17b99ec8832bc292e2dffb170c";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      accounts: [privateKey]
    }
  },
};
