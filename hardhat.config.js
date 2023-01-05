require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-truffle5");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: "https://bitter-neat-brook.ethereum-sepolia.discover.quiknode.pro/0b9b67becb992fcb53d80dd5cfe5c8b6dd07fdb8",
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.ALCHEMY_HTTPS_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "5650ef162aaf9b65f99b5ce5f25c0571daf23febf532c73c42e94390f207eb05",
      ],
      networkId: 5777,
    },
  },
};
