// let str = "blue";
// let reversed = "";

// for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
// }

// console.log(reversed);

input = require('readline-sync')
userName = input.question("What's your name?: ");
console.log(`Hey ${userName}!`)