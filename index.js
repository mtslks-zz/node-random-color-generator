// Library to generate a random color in hex-code
const randomColor = require('randomcolor');
// Library to color output
const chalk = require('chalk');
// Library to prompt the user for input
const prompt = require('prompt-sync')();

let hue = 'random';
let luminosity = 'random';

hue = process.argv[2];
luminosity = process.argv[3];

// Ask for user input at position 2
if (process.argv[2] === 'ask') {
  hue = prompt('Please enter hue: ');
  luminosity = prompt('Please choose luminosity (bright, light or dark): ');
}

// Create hex code color with attributes with randomColor
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// Define output
const output = `################################
################################
################################
####                        ####
####        ${color}         ####
####                        ####
################################
################################
################################`;

console.log(chalk.hex(color)(output));
