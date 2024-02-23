// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input 
const questions = [
    inquirer.prompt([
      {
        type: 'input',
        name: 'project title',
        message: 'What is the title of your project?'
      }
      {
        type: 'input',
        name: 'project description',
        message: 'What is the description of your project?'
      }
      {
        type: 'input',
        name: 'installation instructions',
        message: 'Are there any installation instructions?'
      }
      {
        type: 'input',
        name: 'usage ',
        message: 'What is the usage of your project?'
      }
      {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are contribution guidelines of your project?'
      }
      {
        type: 'input',
        name: 'test instruction',
        message: 'How do you test your project?'
      }
      {
        type: 'input',
        name: 'license',
        message: 'What license will you be using for your project?'
      }
      {
        type: 'input',
        name: 'GitHub username',
        message: 'What is your GitHub username?'
      }
      {
        type: 'input',
        name: 'email address',
        message: 'What is your email address?'
      }
      ])
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
