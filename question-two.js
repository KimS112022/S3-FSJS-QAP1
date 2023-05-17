// Understanding NPM
// The node package I chose to install is called chalk.  I found it on www.npmjs.com and installed it by running <npm install chalk> in the terminal window.  This package allows you to add colors and styling to the terminal output. Fun right!?

// Import the 'chalk' package
const chalk = require("chalk");

// Use chalk to format and style text
const message = chalk.bold.green("It's Fun to Display Color and Styling!!");

// Print the formatted message to the terminal
console.log(message);
