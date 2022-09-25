// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract Contract {
    //  internal accountStorageByFileName;
    mapping(address => mapping(string => string)) internal AccountToCID;

    event CIDDeposit(address indexed _account, string _fileName);
    event CIDRecuperation(address indexed _account, string _fileName);

    function storeCID(string memory _fileName, string memory _CID) public {
        AccountToCID[msg.sender][_fileName] = _CID;
        emit CIDDeposit(msg.sender, _fileName);
    }

    function getCID(string memory _fileName) public returns (string memory) {
        emit CIDRecuperation(msg.sender, _fileName);
        return (AccountToCID[msg.sender][_fileName]);
    }
}
