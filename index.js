// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Briefly, describe the project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'How do you install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How do you use this project?',
    name: 'usage', 
  },
  {
    type: 'input',
    message: 'List the contributors, if any :',
    name: 'contribution', 
  },
  {
    type: 'input',
    message: 'How do you run a test on this project?',
    name: 'test', 
  },
  {
    type: 'list',
    message: 'Choose a license for this project',
    name: 'license', 
    choices: [
      'MIT', 'Apache', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None',
    ]
  },
  {
    type: 'input',
    message: 'Enter you GitHub Username :',
    name: 'github', 
  },
  {
    type: 'input',
    message: 'Enter your email :',
    name: 'email', 
  },
];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // let myReadMe = generateMarkdown(data)
  fs.writeFile(fileName, data, 'utf8', (err) =>
    err ? console.error(err) : console.log('Success')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    // console.log(answers)
    const myReadMe = generateMarkdown(answers)
    writeToFile('README.md', myReadMe);
  })
  .catch((error) => {
    if (error.isTtyError){
      //prompt couldn't be rendered in the current environment
    } else {
      //something went wrong
    }
  })
}

// Function call to initialize app
init();
