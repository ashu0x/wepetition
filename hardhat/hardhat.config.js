require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: "https://rpc.notadegen.com/eth/sepolia",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
