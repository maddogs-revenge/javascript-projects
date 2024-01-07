// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = ("Determination");
let shuttleSpeedMph = Number(17500);
let distanceToMarsKm = Number(225000000);
let distanceToMoonKm = Number(38400);
const milesPerKm = Number(0.621);
let distanceToMarsMiles = Number(distanceToMarsKm * milesPerKm)
let hoursToMars = Number(distanceToMarsMiles / shuttleSpeedMph)
let daysToMars = hoursToMars / 24
let distanceToMoonMiles = Number(distanceToMoonKm * milesPerKm);
let hoursToMoon = (distanceToMoonMiles / shuttleSpeedMph)
let daysToMoon = (hoursToMoon / 24)
let day = "Thursday"
day = 32.5
day = 19
console.log(day);
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
