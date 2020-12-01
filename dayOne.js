import { readIntFile, print } from './util.js';

const puzzleInput = readIntFile('./input/dayOne');

function partOne() {
  let firstEntry, secondEntry = 0;
  
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
}

function partTwo() {
  let firstEntry, secondEntry, thirdEntry = 0;

  puzzleInput.some(first => {
    puzzleInput.forEach(second => {
      let third = puzzleInput.filter(elem => (first + second + elem) === 2020);
      if (third.length > 0) {
        firstEntry = first;
        secondEntry = second;
        thirdEntry = third[0];
      }
      return !firstEntry;
    })
  })

  console.log({ firstEntry, secondEntry, thirdEntry });
  console.log(firstEntry * secondEntry * thirdEntry);
}

partTwo();