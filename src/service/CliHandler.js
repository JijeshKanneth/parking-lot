var SlotManager = require('./SlotManager.js'),
    mgr = new SlotManager();

class CliHandler{
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
module.exports = CliHandler;