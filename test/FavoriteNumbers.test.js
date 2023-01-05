const FavoriteNumber = artifacts.require("FavoriteNumber");

contract("FavoriteNumber", () => {
  let favoriteNumber;

  beforeEach(async () => {
    favoriteNumber = await FavoriteNumber.new();
  });

  it("should store the favorite number correctly", async () => {
    await favoriteNumber.storeNumber(42);
    const storedNumber = await favoriteNumber.retrieve();
    assert.equal(
      storedNumber,
      42,
      "Store number function is not working correctly"
    );
  });

  it("should add a new person with the correct name and favorite number", async () => {
    await favoriteNumber.addPerson(23, "Alice");
    const aliceNumber = await favoriteNumber.getNameToFavoriteNumber("Alice");
    assert.equal(
      aliceNumber,
      23,
      "Add person function is not working correctly"
    );
  });

  it("should retrieve the correct favorite number for a given name", async () => {
    await favoriteNumber.addPerson(23, "Alice");
    const aliceNumber = await favoriteNumber.getNameToFavoriteNumber("Alice");
    assert.equal(
      aliceNumber,
      23,
      "Get name to favorite number function is not working correctly"
    );
  });

  it("should retrieve the stored favorite number", async () => {
    await favoriteNumber.storeNumber(42);
    const storedNumber = await favoriteNumber.retrieve();
    assert.equal(
      storedNumber,
      42,
      "Retrieve function is not working correctly"
    );
  });

  it("should retrieve all people in the people array", async () => {
    await favoriteNumber.addPerson(23, "Alice");
    await favoriteNumber.addPerson(42, "Bob");
    const people = await favoriteNumber.getAllPeople();
    assert.equal(
      people.length,
      2,
      "Get all people function is not working correctly"
    );
    assert.equal(
      people[0].name,
      "Alice",
      "Get all people function is not working correctly"
    );
    assert.equal(
      people[1].name,
      "Bob",
      "Get all people function is not working correctly"
    );
  });

  it("should emit a NewFavoriteNumber event when a new person is added", async () => {
    const result = await favoriteNumber.addPerson(23, "Alice");
    const people = await favoriteNumber.getAllPeople();
    assert.equal(
      people.length,
      1,
      "New favorite number event is not working correctly"
    );
    assert.equal(
      result.logs[0].event,
      "NewFavoriteNumber",
      "New favorite number event is not working correctly"
    );
  });
});
