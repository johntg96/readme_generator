// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdownGen = require('./utils/generateMarkdown.js');
const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: "Your GitHub Username: "
  },
  {
    type: 'input',
    name: 'email',
    message: "Your email address: "
  },
  {
    type: 'input',
    name: 'title',
    message: "Title of the project: "
  },
  {
    type: 'input',
    name: 'description',
    message: "Description of the project: "
  },
  {
    type: 'input',
    name: 'installation',
    message: "What steps need to be taken to install the program?: "
  },
  {
    type: 'input',
    name: 'usage',
    message: "How do you use the program?: "
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Is anybody else a contributor to this project?: "
  },
  {
    type: 'input',
    name: 'tests',
    message: "How do you run tests for your program?: "
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select a license (if applicable): ',
    choices: ["MIT", "APACHE 2.0", "ISC", "BSD-3", "BSD-2"]
  }
];

// TODO: Create a function to write README file
function writeQAs(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
      if (error) {
        throw error;
      } else {
        outputCyanText(`\nREADME.md has been created in ~./utils/generated-readme/\n`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    writeQAs('./utils/generated-readme/README.md', markdownGen.generateMarkdown(answers));
  })
  .catch( err => console.log(err.message));
}

// Function call to initialize app
init();
