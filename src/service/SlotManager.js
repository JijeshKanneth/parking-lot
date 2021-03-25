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
	 * @param {number} user's input via terminal
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
}

module.exports = SlotManager;
