//Exercises: Level 1

// 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = (prompt('Enter your age:'));

console.log(
    age >= 18 
    ? 'You are old enough to drive.' 
    : `You are left with ${18 - age} years to drive.`
);

alert(
    age >= 18 
    ? 'You are old enough to drive.' 
    : `You are left with ${18 - age} years to drive.`
);


// 2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 35,
    yourAge = (prompt('Enter your age:'));

if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
}else if (yourAge < myAge){
    console.log((`I am ${myAge - yourAge} years older than you.`));
}else {
    console.log("We are the same age.");
}


// 3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4;
let b = 3;

// using if else
if ( a > b ){
    console.log(`${a} is greater than ${b}.`);
}else{
    console.log(`${a} is less than ${b}.`);
}

// ternary operator.
console.log(
    a > b 
    ? `${a} is greater than ${b}.` 
    : `${a} is less than ${b}.`
);


// 4- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = (prompt('Enter a number'));

if ( num % 2 === 0 ){
    console.log(`${num} is an even number`);
}else{
    console.log(`${num} is ann odd number`);
}

// Ternary operations

console.log(
    num % 2 === 0 
    ? `${num} is an even number` 
    : `${num} is ann odd number`
);

// Switch

switch(true){
    case num % 2 === 0 :
        console.log(`${num} is an even number`);
        break;
    default:
        console.log(`${num} is ann odd number`);
}

// Exercises: Level 2

/* 1- Write a code which can give grades to students according to theirs scores:
    - 90-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/
// If 
let score = +(prompt('Enter your score:'));
if (score >= 90 && score <= 100){
    console.log(`Your score is ${score}, grade : A`);
}else if(score >= 70 && score <= 89){
    console.log(`Your score is ${score}, grade : B`);
}else if(score >= 60 && score <= 69){
    console.log(`Your score is ${score}, grade : C`);
}else if(score >= 50 && score <= 59){
    console.log(`Your score is ${score}, grade : D`);
}else if(score >= 0 && score <= 49){
    console.log(`Your score is ${score}, grade : F`);
}else {
    console.log(`Invalid score entered`)
}

// Switch
switch(true){
    case (score >= 90 && score <= 100):
        console.log(`Your score is ${score}, grade : A`);
        break;
    case (score >= 70 && score <= 89):
        console.log(`Your score is ${score}, grade : B`);
        break;
    case (score >= 60 && score <= 69):
        console.log(`Your score is ${score}, grade : C`);
        break;
    case (score >= 50 && score <= 59):
        console.log(`Your score is ${score}, grade : D`);
        break;  
    case (score >= 0 && score <= 49):
        console.log(`Your score is ${score}, grade : F`);
    default:
        console.log(`Invalid score entered`);
}

/* 2- Ch;eck if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
*/

let season = prompt('Enter a month')

// if 

if ( season === 'September' || season === 'October' || season === 'November'){
    console.log('The season is Autumn');
}else if(season === 'December' || season === 'January' || season === 'February'){
    console.log('The season is Winter');
}else if(season === 'March' || season === 'April' || season === 'May'){
    console.log('The season is Spring');
}else if(season ==='June' || season === 'July' || season === 'August'){
    console.log('The season is Summer');
}else{
    console.log('invalid season');
}

// switch

switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('The season is Autumn');
        break;
    case 'December':
    case 'January':
    case 'February':
        console.log('The season is Winter');
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log('The season is Summer');
        break;
    default:
        console.log('Invalid season');
}


// 3- Check if a day is weekend day or a working day. Your script will take day as an input.

let today = prompt('What is the day today?');
today = (today.toLowerCase()).charAt(0).toUpperCase() + (today.toLowerCase()).slice(1);

switch(today){
    case 'Saturday':
    case 'Sunday':
        console.log(`${(today)} is a weekend.`);
        break;
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday' :
    case 'Friday':
        console.log(`${(today)} is a working day.`);
        break;
    default:
        console.log("Invalid day.");
}


// Exercises: Level 3

// 1- Write a program which tells the number of days in a month.

let month = prompt("Enter a month:");
month = (month.toLowerCase()).charAt(0).toUpperCase() + (month.toLowerCase()).slice(1);

switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(month + " has 31 days.");
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(month + " has 30 days.");
        break;
    case "February":
        console.log(month + " has 28 days.");
        break;
    default:
        console.log("Invalid month.");
        break;
}


// 2- Write a program which tells the number of days in a month, now consider leap year.

let year = prompt("Enter a year:");
let mOnth = prompt("Enter a month:");
mOnth = (mOnth.toLowerCase()).charAt(0).toUpperCase() + (mOnth.toLowerCase()).slice(1);

switch (mOnth) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(mOnth + " has 31 days.");
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(mOnth + " has 30 days.");
        break;
    case "February":
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(mOnth + " has 29 days."); // Leap year
        } else {
            console.log(mOnth + " has 28 days."); // Non-leap year
        }
        break;
    default:
        console.log("Invalid month.");
}












