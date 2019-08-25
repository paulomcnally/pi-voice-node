/* globals describe it */
const assert = require('assert');
const directory = require('../../utils/directory');

describe('Directory', function() {
  describe('Music', function() {
    it('valid response', function() {
      assert.equal(directory.music('reggae'), '/home/ubuntu/media/music/reggae/');
    });
  });

  describe('Videos', function() {
    it('valid response', function() {
      assert.equal(directory.videos('reggae'), '/home/ubuntu/media/videos/reggae/');
    });
  });
});
