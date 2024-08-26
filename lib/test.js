const test = require('node:test');
const assert = require('assert');

test('test that we can assert something', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});