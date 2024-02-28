// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input 
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are contribution guidelines of your project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license will you be using for your project?',
choices: [
  "none",
  "Academic Free License v3.0",
  "Apache 2.0",
  "Artistic 2.0",
  "Boost Software 1.0",
  "BSD 2-clause ",
  "BSD 3-clause ",
  "BSD 3-clause Clear ",
  "BSD 4-clause ",
  "BSD Zero-Clause ",
  "Creative Commons family",
  "Creative Commons Zero v1.0 Universal",
  "Creative Commons Attribution 4.0",
  "Creative Commons Attribution ShareAlike 4.0",
  "Do What The F*ck You Want To Public ",
  "Educational Community v2.0",
  "Eclipse Public  1.0",
  "Eclipse Public  2.0",
  "European Union Public  1.1",
  "GNU Affero General Public  v3.0",
  "GNU General Public  family",
  "GNU General Public  v2.0",
  "GNU General Public  v3.0",
  "GNU Lesser General Public  family",
  "GNU Lesser General Public License v2.1",
  "GNU Lesser General Public License v3.0",
  "ISC",
  "LaTeX Project Public License v1.3c",
  "Microsoft Public License",
  "MIT",
  "Mozilla Public License 2.0",
  "Open Software License 3.0",
  "PostgreSQL License",
  "SIL Open Font License 1.1",
  "University of Illinois/NCSA Open Source License",
  "The Unlicense",
  "zLib License",
],
         
      },
      {
        type: 'input',
        name: 'gitHub ',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      
       
    ];
    
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
    if (err) throw err;
    console.log('File has been created successfully.');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Creating README.md file...');
    writeToFile('README.md', generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
