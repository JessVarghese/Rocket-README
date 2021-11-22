// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
          {
            type: 'input',
            name: 'github',
            message: 'Enter you Github Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('please enter your Github Username!');
                    return false;
                }
                }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your Email Address?',
          validate: emailInput => {
              if (emailInput) {
                  return true;
              } else {
                  console.log('please enter your Email Address!');
                  return false;
              }
              }
      },
        {
          type: 'input',
          name: 'title',
          message: 'what is the name of your project?(Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log('please enter you name!');
                  return false;
              }
              }

      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('please enter a description!');
                return false;
            }
            }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Provide a link for your deployed application:',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('please enter install instructions!');
                return false;
            }
            }
        },
      {
      type: 'input',
      name: 'install',
      message: 'What command should be run to install dependencies?',
      validate: installInput => {
          if (installInput) {
              return true;
          } else {
              console.log('please enter install instructions!');
              return false;
          }
          }
      },
      {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use:',
      validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('please enter usage instructions!');
            return false;
        }
        }
      },
      {
        type: 'confirm',
        name: 'confirmVisual',
        message: 'Would you like to include a image of your project?',
        default: true
    },
    {
        type: 'input',
        name: 'visual',
        message: 'Enter a link to your image:',
        when: ({ confirmVisual }) =>{
            if (confirmVisual) {
                return true;
            } else {
                return false;
            }
        }
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Please enter contributor information:',
    validate: contributorsInput => {
      if (contributorsInput) {
          return true;
      } else {
          console.log('please enter contributor information!');
          return false;
      }
      }
    },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    validate: testsInput => {
      if (testsInput) {
          return true;
      } else {
          console.log('please enter test instructions!');
          return false;
      }
      }
    },
{
  type: 'checkbox',
  name: 'license',
  message: 'What kind of license should your project have?',
  choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'none']
},

]

   
      


// // TODO: Create a function to write README file
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

// // TODO: Create a function to initialize app
 const init = () => {
   return inquirer.prompt(questions)
   .then(readmeData => {
     return readmeData;
   })
 }

// // Function call to initialize app
 init()
 .then(readmeData => {
  return generateMarkdown(readmeData);
})
.then(pageMD => {
  return writeFile(pageMD);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  
})
.catch(err => {
  console.log(err);
});
