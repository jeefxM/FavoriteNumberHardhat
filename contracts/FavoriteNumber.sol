// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

contract FavoriteNumber {
    event NewFavoriteNumber(
        address indexed from,
        uint256 timestamp,
        string name,
        uint256 favoriteNumber
    );

    struct People {
        address numberKeeper;
        uint256 timestamp;
        string name;
        uint256 favoriteNumber;
    }

    People[] public people;

    mapping(string => uint256) nameToFavoriteNumber;

    uint256 favoriteNumber;

    function storeNumber(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function addPerson(uint256 _favoriteNumber, string memory _name) public {
        People memory newPerson;
        newPerson.name = _name;
        newPerson.favoriteNumber = _favoriteNumber;
        people.push(
            People(msg.sender, block.timestamp, _name, _favoriteNumber)
        );
        nameToFavoriteNumber[_name] = _favoriteNumber;
        emit NewFavoriteNumber(
            msg.sender,
            block.timestamp,
            _name,
            _favoriteNumber
        );
    }

    function getNameToFavoriteNumber(
        string memory name
    ) public view returns (uint256) {
        return nameToFavoriteNumber[name];
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function getAllPeople() public view returns (People[] memory) {
        return people;
    }
}
