const execSync = require('child_process').execSync;

const execCommand = (command) => {
  return execSync(command);
}

module.exports = execCommand;
