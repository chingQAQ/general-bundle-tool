const config = require('../build.config.json');

test('is successful to get config file', () => {
  const length: number = Object.keys(config).length;
  const expected: boolean = true;
  const actual: boolean = length > 0;
  expect(actual).toBe(expected);
});
