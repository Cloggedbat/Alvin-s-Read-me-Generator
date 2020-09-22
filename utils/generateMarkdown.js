// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          

  ## Table of Contents
  *[description](#description)
  *[Initallation instruction](#installation)
  *[User information](#usage)
  *[Licence](#licence)
  *[Contributors](#contributors)


  # Description
  ${data.Description}

  # Installation instructions
  ${data.installation}

  # Usage information
`;
}

module.exports = generateMarkdown;
