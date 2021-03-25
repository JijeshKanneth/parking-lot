const fs = require('fs')
var CommandHandler = require('./service/CommandHandler.js'),
    cli = new CommandHandler();

var commandFile = process.argv.slice(2)[0];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(commandFile)
});

lineReader.on('line', function (line) {
    if(line){
        var command = line.split(' ').reverse();
        cli.processCommand(command.pop(), command);
    }
});

