import { readLines } from './util';

const REQ_FIELDS = [
  'pid',
  'ecl',
  'hcl',
  'eyr',
  'byr',
  'hgt',
  'iyr'
]

let previousObj = {};
let temp = [];
let cur = 0;
readLines('./input/dayFour')
  .forEach(line => {
    if (!temp[cur]) temp[cur] = [];
    if (line !== '') temp[cur].push(line);
    else cur++;
    // if (line !== '') {
    //   let obj = {};
    //   let i = 0;
    //   let prev;
    //   line.split(/ |:/g).forEach(val => {
    //     if (i % 2 !== 0) obj[prev] = val;
    //     prev = val;
    //     i++;
    //   });
    //   Object.assign(previousObj, obj);
    // } else {
    //   let foo = previousObj;
    //   previousObj = {};
    //   return foo;
    // }
  })

const puzzleInput = temp
  .map(passport => {
    let pass = {};
    passport.forEach(line => {
      line.split(/ /g).forEach(kv => {
        let foo = kv.split(/:/g);
        pass[foo[0]] = foo[1];
      })
    })
    return pass;
  }) 


const partOne = () => {
  let falsePassports = 0;
  let oof = [];
  console.log(puzzleInput[1]);
  puzzleInput.forEach(passport => {
    let l = Object.keys(passport).length;
    if (l === 8) {
      // good
    } else if (l === 7) {
      if (Object.keys(passport).includes('cid')) {
        falsePassports++;
      }
    } else {
      falsePassports++
    }
  })
  console.log('\n')
  console.log('Part One');
  console.log({ falsePassports });
  console.log('\n');
}

// partOne();