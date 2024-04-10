// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'No License'){
    return ''
  }
  return `![GitHub License](https://img.shields.io/badge/License-${license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseName
  switch (license){
    case 'MIT':
      licenseName = 'mit'
      break
    case 'IBM':
      licenseName = 'ibmpl-php'
      break
    case 'ISC':
      licenseName = 'isc-license-txt'
      break
    case 'GNU_GPL_v3':
      licenseName = 'gpl-3-0'
      break
    case 'No License':
        return '' 
  }
  return `https://opensource.org/license/${licenseName}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'No License'){
    return ''
  }
  return `This project is covered under the ${license} license.  
  [License](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.desc}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any additional questions, please be sure to contact me using my email or checkout my GitHub below.  
  [GitHub](https://github.com/${data.github})  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
