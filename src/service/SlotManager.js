var Car = require('../domain-object/Car.js'); 

/**
 * @description SlotManager service to manage slot operations
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

        return this.MAX_SLOTS;
	}
    
	/**
	 *
	 * @param {object}  object 
	 * @description check if slot available and assign object to slot
	 * It throws an error if zero or negative input is provided
	 */    
    assignSlot (obj) {
        if(this.MAX_SLOTS == 0){
            var e = new Error('Slots are not available!');
            e.code = 1;
            throw e;
        }
        var slotIndex = this.findNearestAvailableSlot();
        if(slotIndex < 0){
            var e = new Error('Sorry, slot is full');
            e.code = 2;
            throw e;
        }else{
            this.slots[slotIndex] = obj;
        }
        return slotIndex + 1; //add 1 to index to start by 1
 	}
    
	/**
	 * @param {string} registration
	 * @description remove the slot if the condition function returns true
	 */
    emptySlot(conditionFn) {
        if (this.MAX_SLOTS > 0) {
            for (var index = 0; index < this.MAX_SLOTS; index++) {
                var obj = this.slots[index];
                if(conditionFn){
                    if(conditionFn(obj) == true){
                        this.slots[index] = null;
                        return {
                            "value" : obj,
                            "slot" : (index + 1)
                        };
                    }
                }
            }
        }
        else {
            throw new Error('Invalid slot assignment!');
        }
        return null;
	}
    
	/**
	 * @param {} NIL
	 * @description return the current status of slots
	 */ 
    getSlotStatus (formatFn) {
    	if (this.MAX_SLOTS > 0) {
        	for (var i = 0; i < this.slots.length; i++) {
        		if (this.slots[i]) {
                    if(formatFn){
                        formatFn((i + 1), this.slots[i]);
                    }
        		}
        	}
		}
		else {
			throw new Error('Slots are not available');
		}
	}
    
    findNearestAvailableSlot(){
        //Assuming that the nearest slot is in numerical order 
        //Get the first empty slot 
        return this.slots.indexOf(null);
    }
}

module.exports = SlotManager;
