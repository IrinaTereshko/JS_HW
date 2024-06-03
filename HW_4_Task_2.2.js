let age = 10;
const minAge = 18;
const maxAge = 60;

if (typeof(age) != "number"){
    console.log("Error!")
} else if (age < minAge) {
console.log("You don't have access couse your age is " + age + ". It's under the limit.")
} else if ( age> maxAge){
console.log("Keep calm and look Culture channel")
} else console.log ("Welcome!");
