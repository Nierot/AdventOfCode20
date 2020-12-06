import { readFileSync } from 'fs';

export function readFile(path) {
  return readFileSync(path, 'utf-8');
}

export function readLines(path) {
  const file = readFileSync(path, 'utf-8');
  return file.split('\n');
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

export function between(min, max, actual) {
  return min <= actual && actual <= max;
}

/**
 * Calculates intersection between two sets 
 * @param {Set} first 
 * @param {Set} second 
 */
export function intersection(first, second) {
  return new Set([...first].filter(e => second.has(e)));
}