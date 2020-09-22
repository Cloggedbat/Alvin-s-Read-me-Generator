const fs = require("fs");
const gm = require("./utils/generateMarkdown")
// const writeFileAsync = gm.promisify(fs.writefile)
// array of inquirer for user
var inquirer = require("inquirer")
console.log(inquirer)


inquirer
.prompt ([
    {
        type: "input",
        message: "What is the Title of your Project",
        name: "title"

    },
    {
        type: "input",
        message: "Tell me about your Project what does it do and how",
        name: "description"

    },
    {
        type: "input",
        message: "How will this app be used?",
        name: "usage"

    },
    // Work on the licensing
    {
        type: "input",
        message: "What open source license would you like to use?",
        name: "licence"

    },  {
        type: "input",
        message: "How can someone help contribute to the project?",
        name: "contributors"

    },  {
        type: "input",
        message: "How will this app be used?",
        name: "installation"

    },
    
    
])

.then(function(responce){
    console.log(responce)
})
// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    fs.writeFile(fileName, (data), function (err) {
        await writeToFile("READ.md", (title))
        const answers = await promptUser();
        console.log("Successfully wrote to a Mark down file");
        if (err) {
            throw err;
        };
        
    })
}

// function to initialize program
// async function init() {
//     try{
//         // const title = gm()
        
//     }catch(err){
//         console.log(err);
//     }

// }

// function call to initialize program
init();



