const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
newWord = str.slice(3)+ str.slice(0,3)
console.log(newWord)
//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Our original word, ${str}, has been modified to ${newWord}!`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numberOfLetters = input.question("How many letters will be relocated?:")


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numberOfLetters > str.length) {
    console.log(`You can't do that! ${numberOfLetters} is too many! Something like ${newWord} is better.`)
} else {
    console.log(str.slice(numberOfLetters) + str.slice(0,numberOfLetters))
}