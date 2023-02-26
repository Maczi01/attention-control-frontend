// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CentralBank {
    address private owner;
    uint256 public totalBalance;

    constructor (uint256 _totalBalance) {
        owner = msg.sender;
        totalBalance = _totalBalance;
    }

    uint256 public totalBalance = 1000;
    mapping(address => uint256) public balances;

    function increaseTotalBalance(uint amount) public{
        totalBalance += amount;
    }

    function createAccount(address newAcc, uint amount) public {
        require(msg.sender == owner, "Sender is not authorized");
        require(amount <= totalBalance, "Amount is incorrect");
        balances[newAcc] = amount;
        totalBalance = totalBalance - amount;
    }
}


