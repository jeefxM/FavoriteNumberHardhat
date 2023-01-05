const main = async () => {
  const favoriteNumberFactory = await hre.ethers.getContractFactory(
    "FavoriteNumber"
  );
  const favoriteNumberContract = await favoriteNumberFactory.deploy();
  await favoriteNumberContract.deployed();
  console.log("Contract address:", favoriteNumberContract.address);

  const storePerson = await favoriteNumberContract.addPerson(8, "Mariami");
  await storePerson.wait();

  const retrievedNumber = await favoriteNumberContract.retrieve();
  await retrievedNumber;

  const retrievedPeople = await favoriteNumberContract.people([0]);
  await retrievedPeople;

  const favoriteNumber = await favoriteNumberContract.getNameToFavoriteNumber(
    "Mariami"
  );
  await favoriteNumber;
  console.log(favoriteNumber.toString());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
