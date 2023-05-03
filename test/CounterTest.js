const { expect } = require("chai");

describe("Counter", function () {
    let counter;

    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();
    });

    it("should add two numbers correctly", async function () {
        await counter.add(2, 3);
        expect(await counter.getTotal()).to.equal(5);
    });

    it("should subtract two numbers correctly", async function () {
        await counter.subtract(5, 3);
        expect(await counter.getSubtracted()).to.equal(2);
    });

    it("should multiply two numbers correctly", async function () {
        await counter.multiply(2, 3);
        expect(await counter.getMultiplied()).to.equal(6);
    });

    it("should divide two numbers correctly", async function () {
        await counter.divide(6, 2);
        expect(await counter.getDivided()).to.equal(3);
    });

    it("should not allow dividing by zero", async function () {
        await expect(counter.divide(6, 0)).to.be.revertedWith("Cannot divide by zero.");
    });

    it("should not allow subtracting a larger number from a smaller number", async function () {
        await expect(counter.subtract(3, 5)).to.be.revertedWith("Cannot subtract a larger number from a smaller number.");
    });
});
