import { readLines } from '../util';

// [instruction, argument, executed]
const program = readLines('./input/dayEight')
  .map(instruction => instruction.split(' '))

program.forEach(instruction => instruction[2] = false);

const runProgram = (program, double) => {
  let pc = 0;  // Program Counter
  let acc = 0; // Accumulator
  let ins = 0; // Instructions done
  let op, num; // Operator/num
  while (true) {
    if (!program[pc]) break;
    [ op, num ] = program[pc][1].split(/(-|\+)/).filter(line => line !== '');
    num = Number.parseInt(num);
    // console.log({ pc, acc, op, num, ins }, program[pc]);

    // Check if program should terminate
    if (!double && program[pc][2]) break;
    if (double && ins === program.length) break;
    
    program[pc][2] = true;
    ins++;
    switch (program[pc][0]) {
      case 'acc':
        op === '+' ? acc += num : acc -= num;
        pc++;
        break;
      case 'jmp':
        op === '+' ? pc += num : pc -= num;
        break;
      case 'nop':
        pc++;
        break;
      default:
        throw new Error('Instuction unclear');
    }
  }
  return [acc, pc];
}

const bruteForce = program => {
  let newProgram, acc, pc;
  let index = 0;
  for (let ins of program) {
    // Create a deep copy of the program
    newProgram = JSON.parse(JSON.stringify(program)); // fuck js, why cant you just be normal
    if (ins[0] === 'nop') {
      newProgram[index][0] = 'jmp';
    } else if (ins[0] === 'jmp') {
      newProgram[index][0] = 'nop';
    } else {
      index++;
      continue
    }
    [ acc, pc ] = runProgram(newProgram, true);
    if (pc === program.length) return acc;
    index++;
  }
}

const partOne = () => {
  let t1 = new Date().getTime();
  let [ acc ] = runProgram(program, false);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ acc });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let acc = bruteForce(program);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ acc });  
  console.log('\n');
}

partOne();
partTwo();