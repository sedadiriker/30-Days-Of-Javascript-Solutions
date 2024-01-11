// EXERCİSES: LEVEL 1

// 2


// 3. Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(country => console.log(country))

// 4. Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

names.forEach(name => console.log(name))

// 5. Use forEach to console.log each number in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(number => console.log(number))

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const newCountries = countries.map(country => country.toUpperCase())

console.log(newCountries)

// 7. Use map to create an array of countries length from countries array.

const countriesLength = countries.map(country => country.length)

console.log(countriesLength)

// 8. Use map to create a new array by changing each number to square in the numbers array

const squareNumbers = numbers.map(number => number ** 2)

console.log(squareNumbers)

// 9. Use map to change to each name to uppercase in the names array

console.log(
    names.map(name => name.toUpperCase())
)

// 10. Use map to map the products array to its corresponding prices.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

console.log(
    products.map(product => product.price)
)

// 11. Use filter to filter out countries containing land.

console.log(
    countries.filter(country => country.includes('land'))
)

// 12. Use filter to filter out countries having six character.

console.log(
    countries.filter(country => country.length === 6)
)

// 13. Use filter to filter out countries containing six letters and more in the country array.

console.log(
    countries.filter(country => country.length >= 6)
)

// 14. Use filter to filter out country start with 'E';

console.log(
    countries.filter(country => country[0] === 'E')
)

// 15. Use filter to filter out only prices with values.

console.log(
    products.filter(product => typeof product.price === 'number')
)

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
    return arr.filter(element => typeof element === 'string')
}
console.log(getStringLists([1,'30', 'Days', true, 'Of', 3.14, 'Javascript']))

// 17. Use reduce to sum all the numbers in the numbers array.

console.log(
    numbers.reduce((acc, cur) => acc + cur, 0)
)

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries


const concatenateCountries = countries.reduce((acc,country, index) => {
        return acc + (index === countries.length - 1 ? ' and ' + country + ' are north European countries' : ', ' + country)
}, 'Estonia')

console.log(concatenateCountries)

// 20. Use some to check if some names' length greater than seven in names array

console.log(
    names.some(name => name.length > 0)
)

// 21. Use every to check if all the countries contain the word land

console.log(
    countries.every(country => country.includes('land'))
)

// 23. Use find to find the first country containing only six letters in the countries array

console.log(
    countries.find(country => country.length === 6)
)

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(
    countries.findIndex(country => country.length === 6)
)

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(
    countries.findIndex(country => country === 'Norway')
)

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(
    countries.findIndex(country => country === 'Russia')
)

// EXERCİSES: LEVEL 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const filteredProducts = products.filter(product => typeof product.price === 'number')

const totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice)

// 2. Find the sum of price of products using only reduce reduce(callback)

const sumOfPrice = products.reduce((acc, product) =>
    typeof product.price === 'number' ? acc + product.price : acc
,0)

console.log(sumOfPrice)

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

import { countries as importedcountries } from "./countries.js"

function categorizeCountries(pattern) {
    return importedcountries.filter(country => country.name.includes(pattern))
}

console.log(categorizeCountries('land'))


// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const startswithCountries ={}

const letters = importedcountries.map(country => country.name[0])
console.log(letters)

letters.filter(letter => 
    startswithCountries.hasOwnPropert(letter)
    startswithCountries[letter]++
)






// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getFirstTenCountries() {
    return importedcountries.slice(0, 10)
}

console.log(getFirstTenCountries())

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries() {
    return importedcountries.slice(-10)
}

console.log(getLastTenCountries())


// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// EXERCİSES: LEVEL 3

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population







