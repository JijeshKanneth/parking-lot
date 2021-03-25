var SlotManager = require('./src/service/SlotManager.js'),
    mgr = new SlotManager();

const strArgs = process.argv;
const commandArgs = strArgs.slice(2).reverse();
const command = commandArgs.pop();

try{
    switch(command){
        case "create_parking_lot":
            const slotSize = parseInt(commandArgs.pop()); //get param value
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
