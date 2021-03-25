const SlotManager = require('./SlotManager.js');
var Car = require('../domain-object/Car.js'); 

/**
 * @description ParkinglotManager extends the features of SlotManager to manage parking operations
 * @author Jijesh Kanneth
 */
class ParkinglotManager extends SlotManager{
    constructor(){
        super();
    }
	/**
	 *
	 * @param {array} command params
	 * @description create parking slots with given numbers.
	 * It throws an error if invalid input is provided
	 */
    createParkinglot(params){
        let slotSize = parseInt(params.pop()); //get param value
        if(isNaN(slotSize)){
            throw new Error("Invalid parameter!");
        }
        return this.createSlot(slotSize);
    }
	/**
	 *
	 * @param {array} command params
	 * @description assign car object to nearest slot.
	 * It throws an error if parking lot is not available or if invalid params
	 */
    parkCar(params){
        let regNumber = params.pop();
        let color = params.pop();
        var parkinglotNo = -1;
        
        if(regNumber && color){
            let car = new Car(regNumber, color); 
            try{
                parkinglotNo = this.assignSlot(car);
            }catch(e){
                if(e.code == 2){
                    throw new Error('Sorry, parking lot is full');
                }else{
                    throw e;
                }
            }
        }else{
            throw new Error("Invalid parameter!");
        }
        return parkinglotNo;
    }
	/**
	 *
	 * @param {array} command params
	 * @description remove car object to from slot.
	 */ 
    leaveCar(params){
        var regNumber = params.pop();
        const hours = params.pop();
        if(regNumber && hours){
            var status = this.emptySlot(function(car){
                return car && car.number == regNumber;
            });
            if(status && status.value){
                var charge = this.calculateParkingCharge(hours);
                status.charge = charge;
            }else{
                status = {
                    "regNumber" : regNumber
                };
            }
            return status;
        }
        return null;
    }
	/**
	 *
	 * @param {array} command params
	 * @description returns an array of parking slot no and car numbers.
	 */  
    getParkingStatus(){
        var arr = new Array();
        arr.push('Slot No. Registration No.');
        this.getSlotStatus(function(slotIndex, car){
            arr.push(slotIndex + '  ' + car.number);
        });
        return arr;
    }
    
	/**
	 * @param {number} hours
	 * @description calculate the charges
	 */ 
    calculateParkingCharge(hours){
        if(hours <= 2) return 10;
        return (hours - 1) * 10;
    }
}

module.exports = ParkinglotManager;