import { readLines } from '../util';

// [instruction, argument, executed]
const program = readLines('./input/dayEight')
  .map(instruction => instruction.split(' '))

program.forEach(instruction => instruction[2] = false);

const runProgram = program => {
  let pc = 0;  // Program Counter
  let acc = 0; // Accumulator
  let op, num; // Operator/num
  while (true) {
    if (!program[pc]) break;
    [ op, num ] = program[pc][1].split(/(-|\+)/).filter(line => line !== '');
    num = Number.parseInt(num);
    console.log({ pc, acc, op, num }, program[pc]);

    if (program[pc][2]) break; 
    program[pc][2] = true;
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
  return acc;
}


const partOne = () => {
  let t1 = new Date().getTime();
  let acc = runProgram(program);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ acc });  
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
// partTwo();