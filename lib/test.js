const test = require('node:test');
const assert = require('assert');
const csv = require('csv-parser');
const fs = require('fs');

test('test that we can assert something', async (t) => {
  const results = [];
  const readStream = fs.createReadStream(__dirname + '/data/cat_and_mouse.csv').pipe(csv({ separator: ',' }));

  return new Promise((resolve, reject) => {
    readStream.on('end', () => resolve());
    readStream.on('error', (err) => reject(err));
    readStream.on('data', (data) => {
      results.push(data);
      t.assert.deepStrictEqual(results, [1, 2, 3]);
    });
  });
});
