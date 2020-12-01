import { readFileSync } from 'fs';

export function readFile(path) {
  return readFileSync(path, 'utf-8');
}

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

/**
 * Generates a rockstar array called 'the Union'
 * @param {*} array 
 */
export function arrayToRockstar(array) {
  let res = '';
  let iterator = 0;
  array
    .map(elem => `Let the Union at ${iterator++} be ${elem}\n`)
    .forEach(elem => res += elem);
  return res;
}