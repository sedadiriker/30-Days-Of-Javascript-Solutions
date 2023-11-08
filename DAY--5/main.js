// Exercises: Level 1
// 1- Declare an empty array;

const emptyArray = [];

// 2- Declare an array with more than 5 number of elements

const arr6 = Array(6);

// 3- Find the length of your array

console.log(arr6.length);

// 4- Get the first item, the middle item and the last item of the array

let firstİtem = arr6[0],
    middleİtem = arr6[arr6.length / 2], 
    lastİtem = arr6[arr6.length - 1];


// 5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, 'string', true, [1,2,3], -5, {key : 'value'}];
console.log(mixedDataTypes.length);


// 6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


// 7- Print the array using console.log()

console.log(companies);

// 8- Print the number of companies in the array

console.log(companies.length);

// 9- Print the first company, middle and last company

let firstCompany = companies[0],
    middleCompany = companies[Math.floor(companies.length / 2)],
    lastCompany = companies[companies.length-1];

console.log(firstCompany);
console.log(middleCompany);
console.log(lastCompany);

// 10- Print out each company

for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
}

// 11- Change each company name to uppercase one by one and print them out

for(let i = 0; i < companies.length; i++){
    console.log(companies[i].toUpperCase());
}

// 12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(companies.join(', ') + ' are big IT companies.');

// 13- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

companies.includes('Google') === true
    ? console.log('Google') 
    : console.log('Company is not found');

// 14- Filter out companies which have more than one 'o' without the filter method

let filterCompanies = [];
for (let i = 0; i < companies.length; i++) {
    const count = (companies[i].match(/o/gi) || []).length; // If there is a match it returns an array, if there is no match it returns null and throws an error.
    if (count === 2) {
        filterCompanies.push(companies[i]);
    }
}
console.log(filterCompanies);

// 15- Sort the array using sort() method

console.log(companies.sort());

// 16- Reverse the array using reverse() method

console.log(companies.reverse());

// 17- Slice out the first 3 companies from the array

console.log(companies.slice(0,3));

// 18- Slice out the last 3 companies from the array

console.log(companies.slice(companies.length-3));

// 19- Slice out the middle IT company or companies from the array

const ındexMıddle = Math.floor(companies.length / 2);
const mıddle = companies.slice(ındexMıddle, ındexMıddle + 1);
console.log(mıddle);

// 20- Remove the first IT company from the array

console.log(companies.shift());
console.log(companies);

// 21- Remove the middle IT company or companies from the array

if (companies.length % 2 === 0) {
    companies.splice(ındexMıddle - 1, 2);
    console.log(companies);
}

// 22- Remove the last IT company from the array

console.log(companies.pop());

// 23- Remove all IT companies

companies.length = 0;
console.log(companies);



// Exercises: Level 2

// 1- Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import { web_techs } from "./web_techs.js";

// import {countriEs} from "./countries.js";

console.log(countriEs);
console.log(web_techs);

// 2- First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.replace(/[.,]/g, '').split(' ');

console.log(words);
console.log(words.length);


// 3- In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' to the beginning of the shopping cart if it's not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// add 'Sugar' to the end of the shopping cart if it's not already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// remove 'Honey' if you are allergic to honey
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

// modify 'Tea' to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

// 4- In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

countriEs.includes('Ethiopia') === true 
    ? console.log('ETHIOPIA') 
    : countriEs.push('Ethiopia');


// 5- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.


web_techs.includes('Sass') === true
    ? console.log('Sass is a CSS preprocess') 
    : web_techs.push('Sass')
    console.log(web_techs);


// 6- Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);


// Exercises: Level 3

// 1- The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages)

// Sort the array and find the min and max age

ages.sort();
let maxAge = ages[ages.length -1],
    minAge = ages[0];

console.log(`Min age is ${minAge} and max age is ${maxAge}`);


// Find the median age(one middle item or two middle items divided by two)

console.log(ages[Math.floor((ages.length / 2 + ages.length / 2 - 1) / 2)]);


// Find the average age(all items divided by number of items)

let sum = 0;

for(let i = 0; i < ages.length; i++){
    sum += ages[i]
}
let average = sum / ages.length;
console.log(average);

// Find the range of the ages(max minus min)

let range = (ages[ages.length -1]) - (ages[0]);
console.log('Range of the ages:', range);


// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

let diff_1 = Math.abs(minAge - average),
    diff_2 = Math.abs(maxAge - average);

console.log('The value of (min - average) : ',diff_1);
console.log('The value of (max - average) : ',diff_2);


// 2- Find the middle country(ies) in the countries array


import {countriEs} from "./countries.js";

// console.log(countriEs.slice(0,10));

const ıNdexMıddle = Math.floor(countriEs.length / 2);

if (countriEs.length % 2 === 0) {
    const middleCountries = [countriEs[ıNdexMıddle - 1], countriEs[ıNdexMıddle]];
    console.log("Middle Countries:", middleCountries);
} else {
    const middleCountry = countriEs[ıNdexMıddle];
    console.log("Middle Country:", middleCountry);
}


// 3- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if(countriEs.length % 2 === 0){
    const firstPiece = countriEs.slice(0, ıNdexMıddle);
    const secondPiece = countriEs.slice(ıNdexMıddle);
    console.log(`First piece ------${firstPiece}`);
    console.log(`Second piece ------${secondPiece}`);
}else{
    const firstPiece = countriEs.slice(0, ıNdexMıddle + 1);
    const secondPiece = countriEs.slice(ıNdexMıddle + 1)
    console.log(`First piece -------${firstPiece}`);
    console.log(`Second piece --------${secondPiece}`);
}




















