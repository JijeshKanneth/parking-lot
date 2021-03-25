var Car = require('../domain-object/Car.js'); 

/**
 * @description SlotManager service to enable user to interact with parking lot
 * @author Jijesh Kanneth
 */
class SlotManager{
	constructor () {
        this.MAX_SLOTS = 0; // maximum slots allowed
    }
    
	/**
	 *
	 * @param {number} no of slots required
	 * @description creates a slots with given numbers.
	 * It throws an error if zero or negative input is provided
	 */
	createSlot(noOfSlots) {	
		if (noOfSlots <= 0) {
			throw new Error('Minimum one slot is required to create slots');
		}
        this.MAX_SLOTS = noOfSlots;
        this.slots = new Array(noOfSlots).fill(null);

        console.log(this.slots);
        return this.MAX_SLOTS;
	}
    
	/**
	 *
	 * @param {car} car object 
	 * @description check if slot available and assign car object to slot
	 * It throws an error if zero or negative input is provided
	 */    
    parkCar (car) {
        if(this.MAX_SLOTS == 0){
            throw new Error('Slots are not available!');
        }
        var slotIndex = this.findNearestAvailableSlot();
        if(slotIndex < 0){
            throw new Error('Sorry, parking lot is full');
        }else{
            this.slots[slotIndex] = car;
        }
        return slotIndex + 1; //add 1 to index to start by 1
 	}
    
    findNearestAvailableSlot(){
        //Assuming that the nearest slot is in numberical order 
        //Get the first empty slot 
        return this.slots.indexOf(null);
    }
}

module.exports = SlotManager;
