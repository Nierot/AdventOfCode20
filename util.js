import { readFileSync } from 'fs';

export function readLines(path) {
  const file = readFileSync(path, 'utf-8');
  return file.split('\r\n');
}

export function readIntFile(path) {
  return readLines(path).map(elem => Number.parseInt(elem));
}

export function print(...toPrint) {
  console.log(...toPrint);
}