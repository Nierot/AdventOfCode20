import { range, sum } from 'lodash';
import { readFile, readLines } from '../util';

const puzzleInput = readFile('./input/testInput')
  .split(/\n\n/gm)

const notes = puzzleInput[0]
  .split(/\n/gm)
  .map(note => note.split(/:\s/gm))
  .map(note => [ note[0], note[1].split(/[^\d+]/gm) ])
  .map(note => [ note[0], note[1].filter(x => x !== '') ])
  .map(note => [ note[0], note[1].map(x => parseInt(x) )])

const myTicket = puzzleInput[1]
  .split(/your ticket:\n/gm)[1]
  .split(/,/gm)
  .map(x => parseInt(x))

let nearbyTickets = puzzleInput[2]
  .split(/nearby tickets:\n/gm)[1]
  .split(/\n/gm)
  .map(x => x.split(/,/gm))
  .map(x => x.map(y => parseInt(y)))

const getValidTickets = () => {
  let validNumbers = new Set();
  notes.forEach(x => validNumbers = new Set([...validNumbers, ...range(x[1][0], x[1][1] + 1), ...range(x[1][2], x[1][3] + 1) ]))

  let newTickets = nearbyTickets
    .map(t => t.filter(n => !validNumbers.has(n)))

  nearbyTickets = nearbyTickets.filter((t, i) => newTickets[i].length === 0)

  return newTickets;
}

const identifyTicket = () => {
  console.log(nearbyTickets);
}

const partOne = () => {
  let t1 = new Date().getTime();
  let errorRate = getValidTickets()
    .map(a => sum(a))
    .reduce((a, b) => a + b);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ errorRate });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  identifyTicket();
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log('ans');  
  console.log('\n');
}

partOne();
partTwo();