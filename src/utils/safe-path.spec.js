const safePath = require('./safe-path');
const homedir = require('os').homedir();
const path = require('path');

test('should deny bad paths', async () => {
  expect(safePath(path.join(__dirname,"hello-world"))).toBeTruthy();
  expect(safePath(path.join(homedir,"hello-world"))).toBeFalsy();
  expect(safePath(path.join("/","hello-world"))).toBeFalsy();
});
