/* globals describe it */
const assert = require('assert');
const execCommand = require('../../utils/execCommand');

describe('ExecCommand', function() {
  it('valid response', function() {
    const files = execCommand('ls -a | grep "README.md"').toString();
    assert.equal(files, 'README.md\n');
  });
});
