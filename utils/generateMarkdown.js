const fs = require ('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.MD', fileContent, err => {
      if (err) {
        reject(err);

        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== false) {
    return `
    ![badge](https://img.shields.io/badge/License-${license}-yellow.svg)
    `;
  } else {
    return " ";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== false) {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;

  } else {
    return " ";
  }

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== false) {
    return
     `
    # [License](#table-of-contents)
    
    `;
  } else {
    return " ";
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  
  [![badge](https://img.shields.io/badge/License-${data.license}-yellow.svg)]((https://opensource.org/licenses/${data.license}))
  
  ## Description
  ${data.description}
  \n[Deployed application](${data.link})

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Installation
  
  ${data.install}
 
  ## Usage
  ${data.usage}
  
  \n ![visuals](${data.visual})

  ## License
  This project operates under the [${data.license}](https://choosealicense.com/licenses/${data.license}/) license.

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the repo, open and issue or contact me directly:
  * Email: ${data.email}
  * Github: https://github.com/${data.github}

`;
}






module.exports = generateMarkdown;
