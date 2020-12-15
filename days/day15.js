const puzzleInput = [18,8,0,5,4,1,20];

const playGame = maximum => {
  let numbers = new Map();
  let lastSpoken = 0;
  // set initial values
  for (let i = 0; i < puzzleInput.length; i++) {
    numbers.set(puzzleInput[i], i + 1);
    lastSpoken = puzzleInput[i];
  }

  // play game
  for (let i = puzzleInput.length; i < maximum; i++) {
    let last = numbers.get(lastSpoken);
    if (last === undefined) {
      numbers.set(lastSpoken, i);
      lastSpoken = 0;
    } else {
      numbers.set(lastSpoken, i);
      lastSpoken = i - last;
    }
  }
  return lastSpoken
}

const partOne = () => {
  let t1 = new Date().getTime();
  let ans = playGame(2020);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ ans });
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let ans = playGame(30000000);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ ans });  
  console.log('\n');
}

partOne();
partTwo();