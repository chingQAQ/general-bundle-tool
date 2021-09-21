import { join, sep } from 'path';

export const resolve = (path: string, ...other: Array<string>): string => {
  let o = '';
  if (path == undefined) throw new Error("Argument must be a string");
  if (other.length && path != undefined) {
    o = other.join(sep);
  }
  return join(__dirname, '..', path, o);
};
