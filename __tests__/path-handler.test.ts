import { join } from 'path';
import { resolvePath } from '../src/helpers/path-handler';

test('is resolve function return true path ', () => {
  const x: string = '..'
  const expected: string = join(__dirname, '..');
  const actual: string = resolvePath(x);
  expect(actual).toBe(expected);
});

test('is resolve function return the index ', () => {
  const x: string = 'src'
  const y: string = 'index.ts';
  const expected: string = join(__dirname, '..', 'src', 'index.ts');
  const actual: string = resolvePath('..', x, y, '..', y);
  expect(actual).toBe(expected);
});
