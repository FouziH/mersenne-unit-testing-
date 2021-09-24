/* 
FizzBuzz


Write a function that takes a number

if the number is divisible by 3, return "FIZZ"
if the number is divisible by 5, return "Buzz"

if the number is divisible by both 3 and 5, return "FIZZBUZZ"
Otherwise, return null;

*/

function fizzBuzz (number){
    if(number % 3 === 0) {
        return "FIZZ"
    }
}

console.log("3 should return FIZZ", fizzBuzz(3))
console.log("36 should return FIZZ", fizzBuzz(36));

module.exports = fizzBuzz;