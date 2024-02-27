// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';  
}
return `![License](https://img.shields.io/badge/License-${license}-blue.sgv)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return '* [license](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ##
  ${data.description}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Contact](#contact)
  ## Installation
  *${data.installation}
  ## Usage
  *${data.usage}
  ## Contribution
  *${data.contribution}
  ## Test
  *${data.test}
  ## Contact
  *GitHub: ${data.gitHub}
  *E-mail: ${data.email}
  `;
}

module.exports = generateMarkdown;
