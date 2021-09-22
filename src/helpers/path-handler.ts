import { join, sep } from 'path';

interface Resolve {
  (x: string, ...y: Array<string>): string;
}

export const resolvePath: Resolve = function (path, ...other) {
  let o = '';
  if (path == undefined) throw new Error("Argument must be a string");
  if (other.length && path != undefined) {
    o = other.join(sep);
  }
  return join(__dirname, '..', path, o);
};
