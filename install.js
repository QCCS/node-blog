let installCli = require('./src/utils/install');
var commandName = installCli.installCli.getInputCommandName();
installCli.installCli.initByArgs(commandName);