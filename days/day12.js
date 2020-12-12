import { readLines } from '../util';

const puzzleInput = readLines('./input/dayTwelve')
  .map(ins => [ ins.slice(0, 1), parseInt(ins.slice(1)) ]);

const DIRECTIONS = [ 'E', 'S', 'W', 'N' ];

const calculateDistance = (waypoint) => {
  // direction, east, south
  let current = waypoint ? [ 'E', 10, -1 ] : [ 'E', 0, 0 ];
  let ship = [ 'E', 0, 0 ];
  puzzleInput.forEach(ins => {
    switch (ins[0]) {
      case 'F':
        if (waypoint) {
          if (current[0] === 'N' || current[0] === 'W') {
            ship[1] -= current[1] * ins[1];
            ship[2] -= current[2] * ins[1];
          } else {
            ship[1] += current[1] * ins[1];
            ship[2] += current[2] * ins[1];
          }
          break;
        }
        current = moveBoat(current, ins);
        break;
      case 'R':
        if (waypoint) current = turnWaypoint(current, ins);
        else current = turnBoat(current, ins);
        break;
      case 'L':
        if (waypoint) current = turnWaypoint(current, ins);
        else current = turnBoat(current, ins);
        break;
      case 'N':
        current[2] -= ins[1];
        break;
      case 'S':
        current[2] += ins[1];
        break;
      case 'E':
        current[1] += ins[1];
        break;
      case 'W':
        current[1] -= ins[1];
        break;
    }
  })
  if (waypoint) return Math.abs(ship[1] + ship[2]);
  return Math.abs(current[1] + current[2])
}

const turnBoat = (current, instruction) => {
  let currentDirection = DIRECTIONS.indexOf(current[0]);
  let turn = instruction[1] / 90;
  if (instruction[0] === 'R') {
    current[0] = DIRECTIONS[(currentDirection + turn) % 4];
  } else {
    let oof = (currentDirection - turn) % 4;
    if (oof === -1) oof = 3;
    else if (oof === -2) oof = 2;
    else if (oof === -3) oof = 1;
    current[0] = DIRECTIONS[oof];
  }
  return current;
}

const turnWaypoint = (current, instruction) => {
  let angle = instruction[1] / 90;
  if (instruction[0] === 'R') {
    while (angle--) {
      let foo = current[1];
      let bar = current[2];
      current[1] = -bar;
      current[2] = foo;
    }
  } else {
    while (angle--) {
      let foo = current[1];
      let bar = current[2];
      current[1] = bar;
      current[2] = -foo;
    }
  }
  return current;
}

const moveBoat = (current, instruction) => {
  switch (current[0]) {
    case 'E':
      current[1] += instruction[1];
      break;
    case 'N':
      current[2] -= instruction[1];
      break;
    case 'W':
      current[1] -= instruction[1];
      break;
    case 'S':
      current[2] += instruction[1];
      break;
  }
  return current;
}



const partOne = () => {
  let t1 = new Date().getTime();
  let distance = calculateDistance();
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part One:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ distance });  
  console.log('\n');
}

const partTwo = () => {
  let t1 = new Date().getTime();
  let distance = calculateDistance(true);
  let t2 = new Date().getTime();
  console.log('\n');
  console.log('   Part Two:');
  console.log(` Done in ${t2-t1} ms`);
  console.log({ distance });  
  console.log('\n');
}

partOne();
partTwo();