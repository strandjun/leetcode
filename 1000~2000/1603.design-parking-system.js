/**
 * https://leetcode.com/problems/design-parking-system/
 * easy
 * 
 * Desc:
    Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

    Implement the ParkingSystem class:
    ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
    bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 */

/**
 * Example:
    Example 1:
    Input
    ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
    [[1, 1, 0], [1], [2], [3], [1]]
    Output
    [null, true, true, false, false]

    Explanation
    ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
    parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
    parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
    parkingSystem.addCar(3); // return false because there is no available slot for a small car
    parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big
    this.medium = medium
    this.small = small
    // this.count = [big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (carType === 1 && this.big > 0) {
        this.big -= 1
        return true
    } else if (carType === 2 && this.medium > 0) {
        this.medium -= 1
        return true
    } else if (carType === 3 && this.small > 0) {
        this.small -= 1
        return true
    }
    return false 
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

var obj = new ParkingSystem(2, 1, 0)
var param_1 = obj.addCar(1)
var param_2 = obj.addCar(2)
var param_3 = obj.addCar(3)
var param_4 = obj.addCar(1)
var param_5 = obj.addCar(1)

console.log('res: ', param_1, param_2, param_3, param_4, param_5)
