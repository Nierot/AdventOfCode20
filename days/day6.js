import { readLines, intersection } from '../util';

let puzzleInput = [];
let temp = [];
readLines('./input/daySix')
  .map(line => {
    if (line == '') {
      puzzleInput.push(temp);
      temp = []
    } else {
      temp.push(line);
    }
  })

const questionsPerGroup = input => {
  let count = [];
  let temp = [];
  input.forEach(group => {
    group.forEach(questions => {
      questions.split('').forEach(letter => {
        temp.push(letter);
      })
    })
    count.push(temp);
    temp = [];
  })
  return count;
}

const partOne = () => {
  let t1 = new Date().getTime();
  let count = questionsPerGroup(puzzleInput)
    .map(group => [...new Set(group)])
    .map(group => group.length)
    .reduce((a, b) => a + b, 0);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ count });  
  console.log('\n');
}

const partTwo = () => {
  let count = [];
  puzzleInput.forEach(group => {
    let i = [];
    group.forEach(questions => {
      if (i.length == 0) i = questions.split('');
      else i = intersection(i, new Set(questions.split('')));
    })
    if (isNaN(i.size)) {
      count.push(i.length);
    } else {
      count.push(i.size);
    }
  })
  let t1 = new Date().getTime();
  let oof = count.map(o => isNaN(o) ? 0 : o).reduce((a, b) => a + b, 0);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ oof });  
  console.log('\n');
}

partOne();
partTwo();