// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/

let age = +prompt("Enter you Age");

if (age || age == 0) {
	if (age >= 12 && age <= 55) {
		console.log("You can participate in the marathon");
	} else if (age >= 4 && age <= 11) {
		console.log("You are too young to participate in the marathon");
	} else if (age >= 0 && age < 4) {
		console.log("Hey Kiddo! Can You Walk ?");
	} else if (age > 55) {
		console.log("You are too old to participate in the marthon");
	} else {
		console.log("Enter a Positive age");
	}
} else {
	console.log("Enter a Valid Number");
}

// age || age == 0
// 	? age >= 12 && age <= 55
// 		? console.log("You can participate in the marathon")
// 		: age >= 4 && age <= 11
// 		? console.log("You are too young to participate in the marathon")
// 		: age >= 0 && age < 4
// 		? console.log("Hey Kiddo! Can You Walk ?")
// 		: age > 55
// 		? console.log("You are too old to participate in the marthon")
// 		: console.log("Enter a Positive age")
// 	: console.log("Enter a Valid Number");

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/

let n = 7;
let e = "";
for (let i = 1; i <= n; i++) {
	e += "e";
}
console.log(`h${e}llo`);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let naturalNumber = +prompt(
	"Enter Any Natural Number (1,2..n are known as natural number)"
);

let sumOfNaturalNumber = 0;

if (naturalNumber && naturalNumber > 0) {
	for (let j = 1; j <= naturalNumber; j++) {
		sumOfNaturalNumber += j;
	}
}

console.log(sumOfNaturalNumber);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let oneToNine = +prompt("Enter any number between 1 - 9");

switch (oneToNine) {
	case 1:
		alert("ONE");
		break;
	case 2:
		alert("TWO");
		break;
	case 3:
		alert("THREE");
		break;
	case 4:
		alert("FOUR");
		break;
	case 5:
		alert("FIVE");
		break;
	case 6:
		alert("SIX");
		break;
	case 7:
		alert("SEVEN");
		break;
	case 8:
		alert("EIGHT");
		break;
	case 9:
		alert("NINE");
		break;
	default:
		alert("PLEASE TRY AGAIN");
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt("Enter Your Marks (0-100)");

if (marks >= 0 && marks <= 100) {
	switch (marks >= 0 && marks <= 100) {
		case marks > 90 && marks <= 100:
			alert("AA");
			break;
		case marks > 80 && marks <= 90:
			alert("AB");
			break;
		case marks > 70 && marks <= 80:
			alert("BB");
			break;
		case marks > 60 && marks <= 70:
			alert("BC");
			break;
		case marks > 50 && marks <= 60:
			alert("CC");
			break;
		case marks > 40 && marks <= 50:
			alert("CD");
			break;
		case marks > 30 && marks <= 40:
			alert("DD");
			break;
		default:
			alert("FF");
	}
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let num1 = +prompt("Enter a Number 1");
let num2 = +prompt("Enter a Number 2");

num1 >= num2 ? alert(num1) : alert(num2);

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let numb1 = +prompt("Enter Number 1");
let numb2 = +prompt("Enter Number 2");
let numb3 = +prompt("Enter Number 3");

let product = numb1 * numb2 * numb3;

product >= 0 ? alert("+") : alert("-");

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let calculate1 = +prompt("Enter Number1 for Calculation");
let calculate2 = +prompt("Enter Number2 for Calculation");

if (calculate1 && calculate2) {
	alert("Addition of Two Number is " + (calculate1 + calculate2));
	alert("Multiplication of Two Number is " + calculate1 * calculate2);
	if (calculate1 >= calculate2) {
		alert("Subtraction of Two Number is " + (calculate1 - calculate2));
		alert("Division of Two Number is " + calculate1 / calculate2);
	} else {
		alert("Number Two is larger then Number one");
	}
}
