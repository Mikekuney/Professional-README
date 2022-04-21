// TODO: Include packages needed for this application

const inquirer = require('inquirer');

const fs = require('fs');

const generateData = require('./utils/generateMarkdown.js');

const { getuid } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your projects title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your projects description!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('How do you install this project?');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of your project?',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('please state intended usage.');
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'userLicense',
        message: 'What license do you want to use?',
        choices: ['None', 'Unlicensed', 'GPL', 'MIT', 'Apache'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Who contributed to this project?');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Add testing instructions(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('How do you test this project?');
                return false;  
            }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?(Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const getUserInfo = () => {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile("./utils/README.md", generateData({ ...answers}), (err) => {
            if (err) throw new Error(err);
        });
    });
};





// TODO: Create a function to initialize app
function init() {
    getUserInfo();
}

// Function call to initialize app
init();
