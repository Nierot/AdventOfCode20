require = require('esm')(module);

// Load this days module
// Comment this out if you run everything
module.exports = require('./days/day9.js');

const runEverything = () => {
  const fs = require('fs');
  let t1 = new Date().getTime();
  fs.readdirSync('./days')
    .filter(file => file.includes('.js'))
    .filter(file => file !== 'template.js')
    .sort((a, b) => a.split('day')[1] - b.split('day')[1])
    .forEach(file => {
      console.log(file);
      require(`./days/${file}`)
    })
  let t2 = new Date().getTime();
  console.log('\n', `Ran everything in ${t2-t1} ms`);
}

// runEverything();