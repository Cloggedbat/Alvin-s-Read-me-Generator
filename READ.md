function generateMarkdown(data) {
  return `# ${data.title}
          

  ## Table of Contents
  *[description](#description)
  *[Initallation instruction](#installation)
  *[User information](#usage)
  *[Licence](#licence)
  *[Contributors](#contributors)


  # Description
  ${data.description}

  # Installation instructions
  ${data.installation}

  # Usage information


  
`;
}