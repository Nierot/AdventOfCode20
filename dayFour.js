import { readLines } from './util';

const EYE = [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ];

let temp = [];
let cur = 0;
readLines('./input/dayFour')
  .forEach(line => {
    if (!temp[cur]) temp[cur] = [];
    if (line !== '') temp[cur].push(line);
    else cur++;
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

const filterPassports = () => {
  return puzzleInput.filter(passport => {
    let l = Object.keys(passport).length;
    if (l === 8) {
      return passport;
    } else if (l === 7) {
      if (!Object.keys(passport).includes('cid')) {
        return passport;
      }
    }
  })
}

const partOne = () => {
  let goodPassports = filterPassports().length;
  console.log('\n')
  console.log('Part One');
  console.log({ goodPassports });
  console.log('\n');
}

const partTwo = () => {
  let goodPassports = filterPassports()
    .filter(({ byr }) => (!isNaN(Number.parseInt(byr)) && byr >= 1920 && byr <= 2002 && byr.length === 4))
    .filter(({ iyr }) => (!isNaN(Number.parseInt(iyr)) && iyr >= 2010 && iyr <= 2020 && iyr.length === 4))
    .filter(({ eyr }) => (!isNaN(Number.parseInt(eyr)) && eyr >= 2020 && eyr <= 2030 && eyr.length === 4))
    .filter(({ hcl }) => (hcl.indexOf('#') === 0 && hcl.length === 7 && hcl.split('').filter(char => /([a-f]|[0-9]|[#])/.exec(char).length === 0).length === 0))
    .filter(({ ecl }) => EYE.includes(ecl))
    .filter(({ pid }) => (!isNaN(Number.parseInt(pid)) && pid.length === 9))
    .filter(({ hgt }) => {
      if (hgt.includes('cm')) {
        let h = hgt.split('cm')[0];
        return (h >= 150 && h <= 193)
      } else if (hgt.includes('in')) {
        let h = hgt.split('in')[0];
        return (h >= 59 && h <= 76);
      }
    }).length
    console.log('\n')
    console.log('Part two');
    console.log({ goodPassports });
    console.log('\n');
  }

partOne();
partTwo();