let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};
superChimpOne["astronautId"] = '1'
superChimpOne["move"] = steps()
function steps() {
   return Math.floor(Math.random() * 11);
}

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
salamander["astronautId"] = '2'
salamander["move"] = steps()

let chimpanzee = {
   name: "Brad",
   species: "chimpanzee",
   mass: 11,
   age: 6
};
chimpanzee["astronautId"] = '3'
chimpanzee["move"] = steps()

let dog = {
   name: "Leroy",
   species: "beagle",
   mass: 14,
   age: 5
};
dog["astronautId"] = '4'
dog["move"] = steps()

let tardigrade = {
   name: "Almina",
   species: "tardigrade",
   mass: 0.0000000001,
   age: 1
};
tardigrade["astronautId"] = '5'
tardigrade["move"] = steps()
// After you have created the other object literals, add the astronautID property to each one.

// let crew = [superChimpOne, salamander, chimpanzee, dog, tardigrade];

// console.log(crew)

function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautId}.`)
}
// console.log(crewReports(chimpanzee))

let crew = [superChimpOne, salamander, chimpanzee, dog, tardigrade];

// Print out the relevant information about each animal.

// Start an animal race!
let candidates = [superChimpOne, salamander, chimpanzee, dog, tardigrade]
function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move;
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }
  console.log(fitnessTest(candidates))