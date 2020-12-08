import { readLines } from '../util';

const puzzleInput = readLines('./input/daySeven');

const splitBags = () => {
  let bags = {};
  puzzleInput
    .map(word => word
      .split(/contain|\.|,/)
      .filter(word => word !== '')
      .map(word => word[0] === ' ' ? word.slice(1) : word)
      .map(word => word[word.length - 1] === ' ' ? word.slice(0, word.length - 1) : word)
    )
    .forEach(bag => {
      if (!bag[0]) return;
      bag[0] = bag[0].split(/ bags| bag/)[0]
      bags[bag[0]] = bag.slice(1);
    });
  return bags;
}

const splitOffNumbers = () => {
  let bags = splitBags();
  for (let bag in bags) {
    bags[bag] = bags[bag]
      .filter(childBag => childBag !== 'no other bags')
      .map(childBag => childBag.split(/[0-9] | bags| bag/)[1])
    if (bags[bag].length === 0) delete bags[bag];
  }
  return bags
}

const generateBagsWithNumbers = () => {
  let bags = splitBags();
  for (let bag in bags) {
    bags[bag] = bags[bag]
      .filter(child => child !== 'no other bags')
      .map(child => child.split(/ bags| bag/)[0])
      .map(child => [Number.parseInt(child[0]), child.slice(2)])
    if (bags[bag].length === 0) delete bags[bag];
  }
  return bags;
}

const bags = splitOffNumbers();
const bagsNumbered = generateBagsWithNumbers();

const containGold = bag => {
  if (!bags[bag]) return false;

  if (bags[bag].includes('shiny gold')) return true;
  
  for (let child of bags[bag]) {
    if (containGold(child)) return true;
  }

  return false;
}

const countBags = bag => {
  if (!bagsNumbered[bag]) return 0;
  let children = 0;

  bagsNumbered[bag].forEach(child => children += child[0] + child[0] * countBags(child[1])) 
  
  return children;
}

const partOne = () => {
  let t1 = new Date().getTime();
  let bagsThatContainGold = 0;
  for (let bag in bags) {
    bagsThatContainGold += containGold(bag) ? 1 : 0;
  }
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ bagsThatContainGold });
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let bags = countBags('shiny gold');
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ bags });  
  console.log('\n');
}

partOne();
partTwo();