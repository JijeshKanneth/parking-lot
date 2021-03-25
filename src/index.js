var CliHandler = require('./service/CliHandler.js'),
    cli = new CliHandler();


cli.processArgs(process.argv);
