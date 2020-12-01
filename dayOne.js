import { readIntFile } from './util.js';

const puzzleInput = readIntFile('./input/dayOne');

let firstEntry = 0;
let secondEntry = 0;

puzzleInput.some(num => {
  firstEntry = num;
  let second = puzzleInput.filter(elem => (firstEntry + elem) === 2020);
  if (second.length > 0) {
    secondEntry = second[0];
    return true;
  }
});

console.log({ firstEntry, secondEntry });
console.log(firstEntry * secondEntry);