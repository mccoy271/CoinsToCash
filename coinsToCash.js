// var piggyBank = ["quarters", "nickles", "dimes", "pennies"];

const piggyBank = {
    pennies: 342,
    nickles: 45,
    dimes: 74,
    quarters: 20
}

const converter = {
    pennies: .01,
    nickles: .05,
    dimes: .10,
    quarters: .25
}

let convertedPennies = (piggyBank.pennies * converter.pennies);
let convertedNickles = (piggyBank.nickles * converter.nickles);
let convertedDimes = (piggyBank.dimes * converter.dimes);
let convertedQuarters = (piggyBank.quarters * converter.quarters);




let dollarAmount = (convertedPennies + convertedNickles + convertedDimes + convertedQuarters);

console.log(dollarAmount);