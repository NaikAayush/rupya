// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    mapping(address => uint) private addressToIndex;
    mapping(string => uint)  private usernameToIndex;

    address[] private addresses;
    string[] private usernames;
    string[] private ipfsHashes;

    constructor(string memory username, string memory ipfsHash){
        addresses.push(msg.sender);
        usernames.push(username);
        ipfsHashes.push(ipfsHash);
    }
}