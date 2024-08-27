const test = require('node:test');
const assert = require('assert');
const csv = require('csv-parser');
const fs = require('fs');

test('test that we can load data from a test file', async (t) => {
  const expected = {cat_a_pos: '1', cat_b_pos: '2',mouse_c_pos: '3'};
  const results = [];
  const readStream = fs.createReadStream(__dirname + '/data/cat_and_mouse.csv').pipe(csv({ separator: ',' }));

  return new Promise((resolve, reject) => {
    readStream.on('end', () => {

      t.assert.deepStrictEqual(results[0], expected);
      resolve()
    });
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data) => {
      results.push(data);
    });
  });
});
