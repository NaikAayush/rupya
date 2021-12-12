// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    mapping(address => uint) private addressToIndex;
    mapping(address => bool) public addressToBool;

    address[] private addresses;
    string[] private ipfsHashes;

    event newUser(address _from, string ipfsHash);

    constructor(string memory ipfsHash){
        addresses.push(msg.sender);
        ipfsHashes.push(ipfsHash);
    }

    function createUser(string memory ipfsHash) public returns (bool) {
        addresses.push(msg.sender);
        ipfsHashes.push(ipfsHash);
        addressToBool[msg.sender] = true;
        addressToIndex[msg.sender] = addresses.length - 1;

        emit newUser(msg.sender, ipfsHash);

        return true;
    }

    function userExists() public view returns (bool) {
        return addressToBool[msg.sender];
    }

    function getIndexByAddress() public view returns(uint) {
        return addressToIndex[msg.sender];
    }

    function getIpfsHash() public view returns (string memory) {
        uint idx = getIndexByAddress();
        return ipfsHashes[idx];
    }
}