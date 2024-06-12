const inquirer = require('inquirer'); // Package for user prompts
const fs = require('fs'); // Package for file system operations
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown'); // Importing functions from another file

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile({title, description, installation, usage, contributing, tests, license, email}) {
    // Generate the content for the README file using the provided answers
    return `# ${title}

## Description
${description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)


    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## License
    ${renderLicenseBadge(license)} // Render the license badge
    ${renderLicenseSection(license)} // Render the license section
    ${renderLicenseLink(license)} // Render the license link

    ## Questions?
    ${email}`;
}


// TODO: Create a function to initialize app
function init() {
    // Prompt the user with the questions array
    inquirer.prompt(questions).then((answers) => {
        // Generate the content for the README file using the answers
        const readmeContent = writeToFile(answers);
        // Write the content to a file named 'README.md'
        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.error(err) : console.log('README.md created!')
        );
    });
}

// Function call to initialize app
init();