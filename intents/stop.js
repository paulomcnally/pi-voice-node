const execCommand = require('../utils/execCommand');

const action = () => {
  // kill all process from mplayer
  execCommand(`pkill -f mplayer`);
}

module.exports.action = action;
