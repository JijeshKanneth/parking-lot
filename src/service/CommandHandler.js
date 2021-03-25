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
                    var regNumber = params.pop();
                    const color = params.pop();
                    if(regNumber && color){
                        const car = new Car(regNumber, color); 
                        console.log("Allocated slot number: "+mgr.parkCar(car));
                    }else{
                        throw new Error("Invalid parameter!");
                    }
                    break;
                case "leave":
                    var regNumber = params.pop();
                    const hours = params.pop();
                    if(regNumber && hours){
                        var status = mgr.leaveCar(regNumber);
                        if(status && status.car){
                            var charge = mgr.calculateParkingCharge(hours);
                            console.log("Registration number "+ status.car.number+" with Slot Number "+status.slot+" is free with Charge "+charge);
                        }else{
                            console.log("Invalid parking info!");
                        }
                    }
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