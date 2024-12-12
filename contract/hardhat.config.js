require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: process.env.rK8miSJJ9T9pu_PrT5CSo2FamQPJmLXR,
      accounts: [
        process.env
          .d9f8ba5b8c82cf0ef228ecaedc17a0813d4523dff6890c3958f2716eaab9a539,
      ],
    },
  },
};
