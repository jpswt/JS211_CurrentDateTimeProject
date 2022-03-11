// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
}


// Write a JavaScript program to convert a number to a string.

//Declaring the function numberToString with the input parameter of inputNumber
const numberToString = (inputNumber) => {
  //Declare a varible that equals the result of inputNumber to a string
  let convertNumToString = inputNumber.toString();
  console.log(convertNumToString, " has been converted to " + typeof (convertNumToString));
}
//Invoke the function numberToString with input of 8
numberToString(8)


// Write a JavaScript program to convert a string to the number.

//Declaring the function stringToNumber with the input parameter of inputString
const stringToNumber = (inputString) => {
  //Declare a variable of that equals the parseInt of the inputString
  let convertedNumber = parseInt(inputString);
  console.log(convertedNumber, " has been converted to " + typeof (convertedNumber));
}
//Invoke the function stringToNumber with input of 5
stringToNumber(5)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

// Declaring a function getInputType with a parameter of input 
const getInputType = (input) => {
  //Declare a variable of inputType which equals the typeof input
  let inputType = typeof input
  console.log('The datetype is ' + inputType)

}

//Multiple calls of the getInputType function to display various input types
getInputType(true);
getInputType(null)
getInputType(NaN)
getInputType(undefined)
getInputType(12)
getInputType("12")
getInputType(getInputType)


// Write a JavaScript program that adds 2 numbers together.

//Declaring a function addTwoNumbers with parameters of num1 and num2
const addTwoNumbers = (num1, num2) => {
  //Decalare a variable of sumOfNumbers that is the summation of num1 + num2
  let sumOfNumbers = num1 + num2
  console.log(`The sum of ${num1} and ${num2} is ${sumOfNumbers}.`)

}
//Invoking the function addTwoNumbers with 2 and 8.  Summation should equal 10
addTwoNumbers(2, 8)

// Write a JavaScript program that runs only when 2 things are true.

//Decalring a function of bothEvenNumbers to test if both parameters (num1 AND num2) are even numbers
const bothEvenNumbers = (num1, num2) => {
  //Determine if both num1 and num2 are even with modulus operand equal to zero
  if ((num1 % 2 === 0) && (num2 % 2 === 0)) {
    // Print message that passes if both numbers are even
    console.log(`Both ${num1} and ${num2} are even numbers.`)
  } else {
    // Print message if both numbers are not even
    console.log(`Both ${num1} and ${num2} are not even numbers, please try again.`)
  }
}
// Invoking the function bothEvenNumbers to with input of 10 an 20 (both even numbers).  Outcome should test true 
bothEvenNumbers(10, 20)
// Invoking the function bothEvenNumbers to with input of 10 an 11 (one even number).  Outcome should test false 
bothEvenNumbers(10, 11)
// Invoking the function bothEvenNumbers to with input of 13 an 11 (zero even number).  Outcome should test false 
bothEvenNumbers(13, 11)

// Write a JavaScript program that runs when 1 of 2 things are true.

//Declaring a function of oneEvenNumber to test if one of the parameters (num1 OR num2) is an even number
const oneEvenNumber = (num1, num2) => {
  //Determine if either num1 or num2 is even with modulus operand equal to zero
  if ((num1 % 2 === 0) || (num2 % 2 === 0)) {
    // Print message passes if either num1 OR num2 is an even number
    console.log(`Congrats. Atleast one of the numbers: ${num1} or ${num2}, is an even number.`)
  } else {
    // Print message passes if neither num1 OR num2 is an even number
    console.log(`Neither ${num1} or ${num2} is an even number, please try again.`)
  }
}

// Invoking the function oneEvenNumber to with input of 10 an 20 (both even numbers).  Outcome should test true 
oneEvenNumber(10, 20)
// Invoking the function oneEvenNumber to with input of 10 an 11 (one even number).  Outcome should test true 
oneEvenNumber(10, 11)
// Invoking the function oneEvenNumber to with input of 13 an 11 (zero even number).  Outcome should test false 
oneEvenNumber(13, 11)


// Write a JavaScript program that runs when both things are not true.  

//Declaring a function of zeroEvenNumbers to test if one of the parameters (num1 OR num2) is an even number
const zeroEvenNumbers = (num1, num2) => {
  //Determine if neither num1 or num2 is even with modulus operand not equal to zero
  if ((num1 % 2 !== 0 && num2 % 2 !== 0)) {
    // Print passing message if both num1 and num2 are not even numbers
    console.log(`Congrats, niether ${num1} or ${num2} is even.`)
  } else {
    // Print passing message if either num1 or num2 are not even numbers
    console.log(`Either ${num1} or ${num2} is even, please try again.`)
  }
}

// Invoking the function zeroEvenNumbers to with input of 10 an 20 (both even numbers).  Outcome should test false 
zeroEvenNumbers(10, 20)
// Invoking the function zeroEvenNumbers to with input of 10 an 11 (one even number).  Outcome should test false 
zeroEvenNumbers(10, 11)
// Invoking the function zeroEvenNumbers to with input of 13 an 11 (zero even number).  Outcome should test true 
zeroEvenNumbers(13, 11)
