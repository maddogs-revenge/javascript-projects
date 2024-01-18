//Part Three section one

const { NONAME } = require("dns");

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0)+language.charAt(4));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
firstInitial = language[0];
secondInitial = language[4];
console.log(`The abbreviation for ${language} is ${firstInitial}${secondInitial}`);

initials = language.slice(0,1) + language.slice(4,5);
console.log(`The abbreviation for ${language} is ${initials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(notTitleCase.charAt(0).toUpperCase() + notTitleCase.charAt(6).toUpperCase());
console.log(notTitleCase.replace(notTitleCase.charAt(0), notTitleCase.charAt(0).toUpperCase()));