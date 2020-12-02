import { print, readLines, between } from './util';

const puzzleInput = readLines('./input/dayTwo')
  .map(e => e.split(':'))
  .map(e => [ e[0], e[1].split(' ')[1] ])
  .map(e => [ e[0].split('-'), e[1] ])
  .map(e => [ ...[ e[0][0], ...e[0][1].split(' ') ], e[1] ])


const partOne = () => {
  let amountOfPasswords = puzzleInput
    .filter(([ min, max, letter, word ]) => between(min, max, word.split('').filter(l => l === letter).length))
    .length;
  print('\n Part one \n', { amountOfPasswords }, '\n');
}


const partTwo = () => {
  let amountOfPasswords = puzzleInput
    .filter(([ first, second, letter, word ]) => (word[first - 1] === letter) ^ (word[second - 1] === letter))
    .length
  print('\n Part two \n', { amountOfPasswords }, '\n');
}

partOne();
partTwo();