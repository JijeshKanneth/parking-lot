/**
 * @author Jijesh Kanneth
 * @description Car domain object with number as identity and color as state property
 */
class Car {
    constructor (number, color) {
        this.number = number; 
        this.color = color;
    }
}

module.exports = Car;

