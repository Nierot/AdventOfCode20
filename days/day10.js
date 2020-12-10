import { readIntFile } from '../util';

const puzzleInput = readIntFile('./input/testInput')
  .sort((a,b) => a - b);
const highestJolts = Math.max(...puzzleInput);
const deviceJolts = highestJolts + 3;

const checkAdapters = (input) => {
  
}

const partOne = () => {
  let t1 = new Date().getTime();
  checkAdapters();
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log('ans');  
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