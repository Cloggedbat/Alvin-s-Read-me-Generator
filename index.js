const fs = require("fs");
const gm = require("./utils/generateMarkdown")
// const writeFileAsync = gm.promisify(fs.writefile)
// array of inquirer for user
var inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");
console.log(inquirer)


inquirer
.prompt ([
    {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title"

    },
    {
        type: "input",
        message: "Who autored the code?",
        name: "Yourname"

    },
    {
        type: "input",
        message: "Tell me about your Project what does it do and how?",
        name: "Description"

    },
    {
        type: "input",
        message: "How will this app be used?",
        name: "installation"

    },
    // Work on the licensing
    {
        type: "input",
        message: "What open source license would you like to use?",
        name: "contents"

    },  {
        type: "input",
        message: "How can someone help contribute to the project?",
        name: "contributors"

    },  {
        type: "input",
        message: "How will this app be used?",
        name: "user"
    }, {
        type: "input",
        message: "What test instructions would you like to be included?",
        name: "tests"
    }, {
        type: "input",
        message: "What is your github user name?",
        name: "github"
    }, 

    
])

.then(function(response){
    
    console.log(response)
    
    const answers = gm(response)
    writeToFile("README.md", answers)
    console.log(writeToFile)
})

// function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName, data)
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err;
        };
        
    })
}

// function to initialize program
// function init() {
//     const title = gm({
//         title: "A new readme"
//     })
    
// }

// function call to initialize program
// init();



