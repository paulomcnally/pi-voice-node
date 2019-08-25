const config = require('../config');

/**
 * @return String /home/ubuntu/media/music/
 */
const directory = (name) => {
  return `/home/${config.device.username}/${config.device.media}/${name}/`
}

/**
 * @return String /home/ubuntu/media/music/reggae
 */
const music = (genre) => {
  return `${directory('music')}${genre}/`
}

/**
 * @return String /home/ubuntu/media/videos/reggae
 */
const videos = (genre) => {
  return `${directory('videos')}${genre}/`
}

module.exports.music = music;
module.exports.videos = videos;
