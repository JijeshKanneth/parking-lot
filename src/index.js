const fs = require('fs')
var CommandHandler = require('./service/CommandHandler.js'),
    cli = new CommandHandler();

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./data/input.txt')
});

lineReader.on('line', function (line) {
    if(line){
        var command = line.split(' ').reverse();
        cli.processCommand(command.pop(), command);
    }
});

