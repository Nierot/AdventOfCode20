import { readLines } from '../util';

const puzzleInput = readLines('./input/daySeven');

const splitBags = () => {
  let oof = puzzleInput[1]
    .split(/contain|\.|,/)
    .filter(word => word !== '')
    .map(word => word[0] === ' ' ? word.slice(1) : word)
    .map(word => word[word.length - 1] === ' ' ? word.slice(0, word.length - 1) : word)
  console.log(oof)
}

const partOne = () => {
  


  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log('ans');  
  console.log('\n');
}

const partTwo = () => {

  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log('ans');  
  console.log('\n');
}

splitBags();
// partOne();
// partTwo();