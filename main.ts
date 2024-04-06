#! /usr/bin/env node

import inquirer from "inquirer"
let todos = []
let condition = "true";

while(condition)
{
    let todosQuestion = await inquirer.prompt(
    [
        {
            name: "questionOne",
            type: "input",
            message: "What would you like to add in your todos?"

        },
        
        {
            name: "questionTwo",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"

        }
    ]
);
todos.push(todosQuestion.questionOne);
console.log(todos)
condition = todosQuestion.questionTwo
}