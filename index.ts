#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message
console.log("\n\twellcome to \'mehak-ali\' - CLI simple calculator\n")

//Asking question from user through inquirer

let answers = await inquirer.prompt([
    {message:"Enter First Number", type:"number", name:"firstNumber"},
    {message:"Enter Second Number", type:"number", name:"secondNumber"},
{
    message: "select one operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition","Subtractions","Multiplication","Division"],
},
]);

//Conditional statement if Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("invalid input")
}