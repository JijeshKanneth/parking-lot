var ParkinglotManager = require('./ParkinglotManager.js'),
    mgr = new ParkinglotManager();
var Car = require('../domain-object/Car.js');

/**
 * @description processes the commands passed either from CLI or from direct method invocation
 * @author Jijesh Kanneth
 */
class CommandHandler{
	constructor (args) {
        if(args){
            this.processCliArgs(args);
        }
    }
    
	/**
	 * @param {string, array} user command and params
	 * @description process the user command 
	 */
    processCommand(command, params){
        try{
            switch(command){
                case "create_parking_lot":
                    console.log(mgr.createParkinglot(params)+ " Slots Created!");
                    break;
                case "park":
                    console.log("Allocated slot number: "+mgr.parkCar(params));
                    break;
                case "leave":
                    var status = mgr.leaveCar(params);
                    if(status){
                        if(status.slot){ 
                            //if slot was assigned
                            console.log("Registration number "+ status.value.number+" with Slot Number "+status.slot+" is free with Charge "+status.charge);
                        }else{
                            //if there are no slots with the mentioned number
                            console.log("Registration number "+status.regNumber+" not found!");
                        }
                    }
                    break;
                case "status":
                    var arr = mgr.getParkingStatus();
                    arr.forEach(element => {
                      console.log(element);
                    });
                    break;
                default:
                    console.log("Invalid command!!");
            }
        }catch(e){
            console.log(e.message);
        }
    }
    
	/**
	 *
	 * @param {array} user inputs - Command LIne
	 * @description retrieve and process args
	 */
    processCliArgs(args){
        const commandArgs = args.slice(2).reverse();
        this.processCommand(commandArgs.pop(), commandArgs);  
    }
}
module.exports = CommandHandler;