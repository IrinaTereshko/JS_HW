let age = 10;
const minAge = 18;
const maxAge = 60;

switch (true){
    case age < minAge:
        console.log("You don't have access couse your age is " + age + ". It's under the limit.");
    break;
    case age > maxAge:
    console.log("Keep calm and look Culture channel");
    break;
    case age >= minAge && age <= maxAge :
    console.log ("Welcome!");
    break;
default:
    console.log("Technical work");    
    }
