const fs = require("fs");
const gm = require("./utils/generateMarkdown")
// array of questions for user
questions
.prompt ([
    {
        type: "input",
        message: "what is your name?",
        title: "name"
        
    },
    {
        type: "input",
        message: "what is your name?",
        title: "name"
        
    },
    {
        type: "input",
        message: "what is your name?",
        title: "name"
        
    },
    {
        type: "input",
        message: "what is your name?",
        title: "name"
        
    },
    
    
])
const questions = require("questions")
.then(function(responce){
    console.log(responce)
})

// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, (data), function (err) {
        if (err) {
            throw err;
        };
        
    })
}

// function to initialize program
function init() {
    const title = gm({
        title: "what up"
    })
    writeToFile("README.md", (title))

}

// function call to initialize program
init();



