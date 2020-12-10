import { readIntFile } from '../util';

const puzzleInput = readIntFile('./input/dayTen')
  .sort((a,b) => a - b);
const highestJolts = Math.max(...puzzleInput);
const deviceJolts = highestJolts + 3;

let previous = 0;

const checkAdapters = () => {
  let ones = 0;
  let threes = 1;
  puzzleInput.filter(jolt => {
    console.log(jolt);
    if (jolt === (previous + 1)) {
      previous = jolt;
      ones++;
      return true;
    } else if (jolt === (previous + 2)) {
      previous = jolt;
      return true;
    } else if (jolt === (previous + 3)) {
      previous = jolt;
      threes++;
      return true;
    } else {
      return false;
    }
  })
  return { ones, threes }
}

const partOne = () => {
  let t1 = new Date().getTime();
  let { ones, threes } = checkAdapters();
  let ans = ones * threes;
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ ans });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();

  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log('ans');  
  console.log('\n');
}

partOne();
partTwo();