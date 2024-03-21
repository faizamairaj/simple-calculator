#! /usr/bin/env node
import inquirer from "inquirer";
const myCalc = await inquirer.prompt([
    {
        type: 'list',
        name: 'operation',
        message: 'What operation you want to perform ?', //Arthmetic Operation
        choices: ['add', 'subtract', 'multiply', 'division']
    },
    {
        type: 'number',
        name: 'num1',
        message: 'Enter first number',
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter other number',
    }
]);
if (myCalc.operation === 'add') {
    console.log(`The sum of your numbers is : ${myCalc.num1 + myCalc.num2}`);
}
else if (myCalc.operation === 'subtract') {
    console.log(`The difference of your numbers is : ${myCalc.num1 - myCalc.num2}`);
}
else if (myCalc.operation === 'multiply') {
    console.log(`The product of your numbers is : ${myCalc.num1 * myCalc.num2}`);
}
else {
    console.log(`The quotient of your numbers is : ${myCalc.num1 / myCalc.num2}`);
}
