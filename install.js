let installCli = require('./src/utils/install');
let commandName = installCli.installCli.getInputCommandName();
installCli.installCli.initByArgs(commandName);
