import { readIntFile } from '../util';

const puzzleInput = readIntFile('./input/dayNine');
const PREAMBLE_LENGTH = 25;

const getWrongNumber = () => {
  for (let i = 0; i < puzzleInput.length - PREAMBLE_LENGTH; i++) {
    let preamble = puzzleInput.slice(i, i + PREAMBLE_LENGTH);
    let int = puzzleInput[i + PREAMBLE_LENGTH];
    let oof = preamble.filter(first => {
      for (let second of preamble) {
        if (first + second === int) return true;
      }
    })
    if (oof.length === 0) return puzzleInput[i + PREAMBLE_LENGTH];
  }
}

const contiguousSet = wrongNumber => {
  return puzzleInput.map((int, index) => {
    let sum = [];
    for (let i = index; i < puzzleInput.length; i++) {
      let val = puzzleInput[i];
      if (val === wrongNumber) return;
      sum.push(val);
      let cur = sum.reduce((a, b) => a + b);
      if (cur === wrongNumber) {
        return sum;
      } else if (cur > wrongNumber) {
        return;
      }
    }
  })
  .filter(arr => !!arr)[0];
}

const partOne = () => {
  let t1 = new Date().getTime();
  let wrongNumber = getWrongNumber();
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('         Part One:');
  console.log(`       Done in ${t2-t1} ms`);
  console.log({ wrongNumber });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let set = contiguousSet(getWrongNumber());
  let encryptionWeakness = Math.min(...set) + Math.max(...set);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('         Part Two:');
  console.log(`       Done in ${t2-t1} ms`);
  console.log({ encryptionWeakness });  
  console.log('\n');
}

partOne();
partTwo();