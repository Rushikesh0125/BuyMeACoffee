require("@nomicfoundation/hardhat-toolbox");

const GOERLI_URL = process.env.ALCHEMY_API_KEY_GOERLI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/ah3X8Vj2snVIukdVDB4NQTlYLOODXjgu",
			accounts: ["20b0f33e899dc4a4402bc2ed840ff26463a93afb19f0df6a26f9eb31cc096503" || ''],
			chainId: 5,
		},
  }
};
