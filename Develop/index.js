// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        name:'title',
        message: 'Please type your project title.'
    },
    {
        name:'license',
        type:'list',
        message:'Please select your license.',
        choices: ['No License', 'MIT', 'IBM', 'ISC', {
            name:'GNU GPL v3',
            value: 'GNU_GPL_v3'
        }],
        default: ['No License']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if(err){
            return console.log(err)
        }
        console.log('README generated successfully!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((ans)=>{
        const markdown = generateMarkdown(ans)

        writeToFile('README.md',markdown)
    })
    .catch((err)=>{
        console.log(err)
    })

    
}

// Function call to initialize app
init();
