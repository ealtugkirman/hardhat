pragma solidity ^0.8.0;

contract Counter {
    uint256 private total;
    uint256 private subtracted;
    uint256 private multiplied;
    uint256 private divided;

    function add(uint256 x, uint256 y) public {
        total = x + y;
    }

    function subtract(uint256 x, uint256 y) public {
        require(x >= y, "Cannot subtract a larger number from a smaller number.");
        subtracted = x - y;
    }

    function multiply(uint256 x, uint256 y) public {
        multiplied = x * y;
    }

    function divide(uint256 x, uint256 y) public {
        require(y != 0, "Cannot divide by zero.");
        divided = x / y;
    }

    function getTotal() public view returns (uint256) {
        return total;
    }

    function getSubtracted() public view returns (uint256) {
        return subtracted;
    }

    function getMultiplied() public view returns (uint256) {
        return multiplied;
    }

    function getDivided() public view returns (uint256) {
        return divided;
    }
}
