import { readLines } from '../util';
import _, { add } from 'lodash';

const puzzleInput = readLines('./input/dayFourteen')

const readProgram = (part1) => {
  let bitmask = '';
  let memory = new Map();
  puzzleInput.forEach(ins => {
    if (ins.startsWith('mask')) bitmask = ins.split(/mask\s=\s/g)[1];
    else {
      const [ location, value ] = ins.split(/mem\[|\]\s=\s/g).slice(1);
      if (part1) {
        memory.set(parseInt(location), applyBitmask(value, bitmask));
      } else {
        const addresses = generateAddresses([ applyFloatingBitmask(location, bitmask) ]);
        addresses.forEach(a => memory.set(a, parseInt(value)));
      }
    }
  })
  return memory;
}

const generateAddresses = addresses => {
  if (addresses.filter(a => a.includes('X')).length === 0) return addresses.map(a => parseInt(a.join(''), 2))
  let x = addresses[0].indexOf('X')
  let newAdresses = []
  for (let a of addresses) {
    let one = Array.from(a)
    let two = Array.from(a)
    one[x] = '0'
    two[x] = '1'
    newAdresses.push(one)
    newAdresses.push(two)
  }
  return generateAddresses(newAdresses);
}

const applyBitmask = (decimal, bitmask) => {
  let binary = _.padStart((parseInt(decimal, 10) >>> 0).toString(2), 36, '0').split('');
  bitmask.split('').forEach((l, i) => l !== 'X' ? binary[i] = l : null);
  return parseInt(binary.join(''), 2);
}

const applyFloatingBitmask = (address, bitmask) => {
  let binary = _.padStart((parseInt(address, 10) >>> 0).toString(2), 36, '0').split('');
  bitmask.split('').forEach((l, i) => l !== '0' ? binary[i] = l : null);
  return binary;
}

const partOne = () => {
  let t1 = new Date().getTime();
  let ans = 0;
  for (let val of readProgram(true)) {
    ans += val[1];
  }
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ ans });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let ans = 0;
  for (let val of readProgram(false)) {
    ans += val[1];
  }
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ ans });  
  console.log('\n');
}

partOne();
partTwo();