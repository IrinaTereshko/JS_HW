let age = "10";
const minAge = 18;
const maxAge = 60;

if (+age < minAge) {
console.log("You don't have access couse your age is " + age + ". It's under the limit.")
} else if ( +age> maxAge){
console.log("Keep calm and look Culture channel")
} else if (+age <= maxAge && +age >= minAge){
console.log ("Welcome!")}
else console.log("Error!");
