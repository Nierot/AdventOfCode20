import { readLines } from './util';
const colors = require('colors');

const puzzleInput = readLines('./input/dayThree').map(line => line.repeat(100));

const partOne = () => {
  let treesEncountered = checkSlope(3, 1);
  console.log('=========================='.rainbow);
  console.log('        Part One   '.red);
  console.log({ treesEncountered });
  console.log('=========================='.rainbow);
  return treesEncountered;
}

const highlight = (string, index) => {
  let letter = string.substring(index, index + 1);
  return string.substring(0, index) + letter.red + string.substring(index + 1);
}

const checkSlope = (right, down) => {
  let curY = 0;
  let treesEncountered = 0;

  puzzleInput.forEach((line, index) => {
    if (down % 2 === 0 && index % 2 === 0) {
      // Skip line
      return;
    }
    // Go to the right by x spots
    curY += right;
    if (index === 0) {
      curY -= right;
      return;
    }

    if (line[curY] === '#') {
      treesEncountered++;
    }

  })
  return treesEncountered;
}

const partTwo = () => {
  let treesEncountered = checkSlope(1, 1) * checkSlope(3, 1) * checkSlope(5, 1) * checkSlope(7, 1) * checkSlope(1, 2);
  console.log('=========================='.rainbow);
  console.log('        Part One   '.red);
  console.log({ treesEncountered });
  console.log('=========================='.rainbow);
}

partTwo();