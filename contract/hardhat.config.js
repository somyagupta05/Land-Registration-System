
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks:{
    sepolia:{
      url:process.env.Alchemy_Uri,
      accounts:[process.env.Account_PRIVATE_KEY]
    }
  }
}