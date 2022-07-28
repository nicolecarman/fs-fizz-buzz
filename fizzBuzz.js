// Write a program that counts from 1 to 50 in fizzbuzz fashion. To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

// Write your solution below this line:

// use for loop to iterate through the range 1-50
// using modulo to see when numbers are divisible by 3 and 5
for (let i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        //  if the number is divisible by both 3 and 5
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        // if the number is divisible by 5
        console.log("buzz");
    } else if (i % 3 === 0) {
        // if the number is divisible by 3
        console.log("fizz");
    } else {
        // if none of the other conditions apply (if the number isn't divisible by 3 or 5), print just the number
        console.log(i);
    }
}