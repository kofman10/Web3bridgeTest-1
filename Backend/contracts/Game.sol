// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Game {
    uint256 public constant WHITE = 1;
    uint256 public constant BLACK = 2;
    uint256 public constant RED = 3;
    uint256 public constant YELLOW = 4;

    mapping(uint256 => mapping(uint256 => uint256)) private board;

    constructor() {
        board[1][2] = BLACK;
        board[3][4] = RED;
        board[5][7] = YELLOW;
    }

    function getColor(uint256 x, uint256 y) public view returns (uint256) {
        require(x > 0 && x <= 7, "Invalid x coordinate");
        require(y > 0 && y <= 5, "Invalid y coordinate");

        return board[x][y];
    }

    function setColor(uint256 x, uint256 y, uint256 colorId) public {
    require(x > 0 && x <= 7, "Invalid x coordinate");
    require(y > 0 && y <= 5, "Invalid y coordinate");
    require(colorId >= 1 && colorId <= 4, "Invalid color ID");
    board[x][y] = colorId;
}

}