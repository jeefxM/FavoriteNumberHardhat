const main = async () => {
  const favoriteNumberFactory = await hre.ethers.getContractFactory(
    "FavoriteNumber"
  );
  const favoriteNumberContract = await favoriteNumberFactory.deploy();

  await favoriteNumberContract.deployed();

  console.log("FavoriteNumber address: ", favoriteNumberContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
