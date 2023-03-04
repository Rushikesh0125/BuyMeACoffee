//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BuyMeACoffee {
    event NewMsg(address indexed from, string msg, string name, uint256 time);

    struct Msg {
        address from;
        string msg;
        string name;
        uint256 time;
    }

    Msg[] msgList;

    mapping(address => bool) friends;

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function getMsges() public view returns (Msg[] memory) {
        return msgList;
    }

    function buyCoffee(string memory _name, string memory _msg) public payable {
        require(msg.value > 0, "coffee is expensive now days");
        msgList.push(Msg(msg.sender, _msg, _name, block.timestamp));

        emit NewMsg(msg.sender, _msg, _name, block.timestamp);
    }

    function withDraw() public payable {
        require(msg.sender == owner, "Only owner can drink coffee");
        require(owner.send(address(this).balance));
    }

    function isFriend(address _add) public view returns (bool) {
        return friends[_add];
    }
}
