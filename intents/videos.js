const directory = require('../utils/directory');
const execCommand = require('../utils/execCommand');
const stop = require('./stop');

const action = (slots) => {
  if (slots.length) {
    const genre = slots[0].rawValue;

    // stop all other process
    stop.action();

    // run a playlist
    execCommand(`mplayer ${directory.videos(genre)}*.mp4 2>/dev/null`);

    // create a pid file
    execCommand("ps -A | grep mplayer | awk '{print $1}' > ~/mplayer.pid");
  }
}

module.exports.action = action;
