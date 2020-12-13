import { readLines } from '../util';

const puzzleInput = readLines('./input/dayThirteen');

const partOne = () => {
  let t1 = new Date().getTime();
  const earliestTimestamp = parseInt(puzzleInput[0]);
  const busIDs = puzzleInput[1]
    .split(/,/g)
    .filter(id => id !== 'x')
    .map(id => parseInt(id))
    .map(id => [ id, Math.floor(earliestTimestamp / id) * id + id ] )
    .sort((a, b) => a[1] - b[1])

  let answer = busIDs[0][0] * (busIDs[0][1] - earliestTimestamp);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ answer });
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let timestamp = 0;
  let iShouldWriteBetterCode = 1000000000000000;
  let max = 1463175673841141;
  const [ first, ...constraint ] = puzzleInput[1]
    .split(/,/g)
    .map(id => isNaN(parseInt(id)) ? id : parseInt(id));
  for (let i = iShouldWriteBetterCode; true; i++) {
    if (timestamp > max) break;
    timestamp = i;
    if (constraint.filter((next, index) => {
      if (next === 'x') return false;
      return ((timestamp + index + 1) / next) % 1 !== 0;
    }).length === 0) break;
  }
  timestamp++;
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ timestamp });
  console.log('\n');
}

partOne();
partTwo();