var SlotManager = require('./SlotManager.js'),
    mgr = new SlotManager();
var Car = require('../domain-object/Car.js');

class CommandHandler{
	constructor (args) {
        if(args){
            this.processArgs(args);
        }
    }
    
    processCommand(command, params){
        try{
            switch(command){
                case "create_parking_lot":
                    const slotSize = parseInt(params.pop()); //get param value
                    if(isNaN(slotSize)){
                        throw new Error("Invalid parameter!");
                    }else{
                        console.log(mgr.createSlot(slotSize)+ " Slots Created!");
                    }
                    break;
                case "park":
                    const regNumber = params.pop();
                    const color = params.pop();
                    if(regNumber && color){
                        const car = new Car(regNumber, color); 
                        console.log("Allocated slot number: "+mgr.parkCar(car));
                    }else{
                        throw new Error("Invalid parameter!");
                    }
                    break;
                case "leave":
                    break;
                case "status":
                    break;
                default:
                    console.log("Invalid command!!");
            }
        }catch(e){
            console.log("ERROR -> "+e.message);
        }
    }
    
    processArgs(args){
        const commandArgs = args.slice(2).reverse();
        this.processCommand(commandArgs.pop(), commandArgs);  
    }
}
module.exports = CommandHandler;