import { readLines } from '../util';

const puzzleInput = readLines('./input/dayFive');

const partOne = puzzleInput => {
  let highestID = Math.max(...generateIDS(puzzleInput));
  console.log('\n');
  console.log('   Part One:');
  console.log({ highestID })  
  console.log('\n');
}

const generateIDS = puzzleInput => {
  let ids = [];
  puzzleInput.forEach(pass => {
    let top = 127;
    let bottom = 0;
    let right = 7;
    let left = 0;
    pass.split('').forEach(letter => {
      switch(letter) {
        case 'F':
          top = Math.floor((top - bottom) / 2) + bottom;
          break;
        case 'B':
          bottom = Math.ceil((top - bottom) / 2) + bottom;
          break;
        case 'L':
          right = Math.floor((left - right) / 2) + right;
          break;
        case 'R':
          left = Math.ceil((left - right) / 2) + right;
          break;
      }
    })
    ids.push((top * 8) + right);
  })
  return ids.sort((a, b) => a - b);
}

const partTwo = puzzleInput => {
  const ids = generateIDS(puzzleInput);
  let yourID = ids.filter((id, index) => ids[index + 1] - id > 1)[0] + 1;
  console.log('\n');
  console.log('   Part Two:');
  console.log({ yourID })  
  console.log('\n');
}

partOne(puzzleInput);
partTwo(puzzleInput);