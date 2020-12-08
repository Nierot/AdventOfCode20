require = require('esm')(module);

// Load this days module
module.exports = require('./days/day8.js');

const runEverything = () => {
  const fs = require('fs');
  fs.readdirSync('./days')
    .filter(file => file.includes('.js'))
    .filter(file => file !== 'template.js')
    .forEach(file => {
      console.log(file);
      require(`./days/${file}`)
    })
}

runEverything();