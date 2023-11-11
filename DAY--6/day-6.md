
<h2>Exercises: Level 1</h2>

```js
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
```

1. Iterate 0 to 10 using for loop, do the same using while and do while loop

    ```js
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
    ```

    ```js
    let i = 0;
    while (i < 11) {
        console.log(i);
        i++;
    }
    ```

    ```js
    let i = 0;
    do {
    console.log(i);
    i++;
    } while (i < 10);
    ```

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

    ```js
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    ```

    ```js
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    ```

    ```js
    let i = 10;
    do {
        console.log(i);
        i--;
    } while (i >= 0);
    ```

3. Iterate 0 to n using for loop

    ```js
    const n = 5; 
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    ```

4. Write a loop that makes the following pattern using console.log():

    ```js
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ```

    ```js
    let i = 1;
    let pattern = '';
    while(i <= 7){
        pattern += '#'
        console.log(pattern);
        i++
    }
    ```

5. Use loop to print the following pattern:

    0 x 0 = 0

    1 x 1 = 1

    2 x 2 = 4

    3 x 3 = 9

    4 x 4 = 16

    5 x 5 = 25

    6 x 6 = 36

    7 x 7 = 49

    8 x 8 = 64

    9 x 9 = 81

    10 x 10 = 100

    ```js
    for (let i = 0; i < 11; i++) {
        console.log(`${i} X ${i} = ${i * i}`);
    }
    ```

6. Using loop print the following pattern

    i    i^2   i^3

    0    0     0

    1    1     1

    2    4     8

    3    9     27

    4    16    64

    5    25    125

    6    36    216

    7    49    343

    8    64    512

    9    81    729

    10   100   1000

    ```js
    console.log('i    i^2   i^3');
    for (let i = 0; i < 11; i++) {
        console.log(`${i}    ${i ** 2}    ${i ** 3}`);
    }
    ```

7. Use for loop to iterate from 0 to 100 and print only even numbers

    ```js
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    ```

8. Use for loop to iterate from 0 to 100 and print only odd numbers

    ```js
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    ```

9. Use for loop to iterate from 0 to 100 and print only prime numbers

    ```js
    let num = prompt('Enter a number between 0 and 100:'),
    prime = true;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) {
        prime = false;
        console.log(`${num} is not a prime number`);
        break;
    }else{
        console.log(`${num} is a prime number`);
    }
    }
    ```

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    ```js
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
    ```

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```js
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    console.log(`The sum of all evens from 0 to 100 is ${evenSum}.And the sum of all odds from 0 to 100 is ${oddSum}.`);
    ```

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    [2550, 2500]

    ```js
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    console.log([evenSum, oddSum]);
    ```

13. Develop a small script which generate array of 5 random numbers

    ```js
    let randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
    console.log(randomNumbers);
    ```

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

    ```js
    let numbers = [];
    while(numbers.length < 5) {
        let x = Math.floor(Math.random() * 6);
        if(!numbers.includes(x)) {
            numbers.push(x)
        }
    }
    console.log(numbers);
    ```

15. Develop a small script which generate a six characters random id:

    ```js
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let ıd = '';

    while (ıd.length < 6) {
        let ındex = Math.floor(Math.random() * chars.length);
        let charsIn = chars[ındex]    
            ıd += charsIn       
    }
    console.log(ıd);
    ```

<h2>Exercises: Level 2</h2>

1. Develop a small script which generate any number of characters random id:

    ```js
    const chars = "0123456789abcdefghiklmnopqrstuvwxyz";
    let ıd = '';
    for(let i = 0; i < Math.floor(Math.random() * 25); i++) {
        let ındex = Math.floor(Math.random() * chars.length);
        ıd += chars[ındex];
    }

    console.log(ıd);
    ```

2. Write a script which generates a random hexadecimal number.

    ```js
    const characters = '0123456789abcdef';
    let hexadecimalNumber = '#';
    for(let i = 0; i < 6; i++) {
        let ındex = Math.floor(Math.random() * characters.length);
        hexadecimalNumber += characters[ındex];
    }
    console.log(hexadecimalNumber)
    ```

3. Write a script which generates a random rgb color number.

    ```js
    const red = Math.floor(Math.random() * 257);
    const green = Math.floor(Math.random() * 257);
    const blue = Math.floor(Math.random() * 257);

    console.log(`rgb(${red},${green},${blue})`);
    ```

4. Using the above countries array, create the following new array.

    ```js
    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ]

    console.log(countries.toString().toUpperCase().split(','));
    ```

5. Using the above countries array, create an array for countries length'.

    ```js
    const countriesLength = [];
    let i = 0;
    while(i < countries.length) {
        countriesLength.push(countries[i].length);
        i++;
    }
    console.log(countriesLength)
    ```

6. Use the countries array to create the following array of arrays:

    ```js
    [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
    ]
    ```
    ```js
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const arrayOfArray = [];
    let i = 0;

    while( i < countries.length) {
        arrayOfArray.push([countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length]);
        i++;
    }

    console.log(arrayOfArray);
    ```

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    ```js
   const countriesWithLand = [];

    for(let i =0; i < countries.length; i++) {
        if(countries[i].includes('land')) {
        countriesWithLand.push(countries[i]);     
        }
    }
    console.log(countriesWithLand);
    ```

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ```js
    const countriesWithİa = [];
    let i = 0;
    while(i < countries.length) {
        if(countries[i].includes('ia')) {
            countriesWithİa.push(countries[i]);
        }
        i++;
    }
    console.log(countriesWithİa);
    ```

9. Using the above countries array, find the country containing the biggest number of characters.

    ```js
    const lengths = [];
    let i = 0;

    while(i < countries.length) {
        lengths.push(countries[i].length);
        i++;
    }
    console.log(countries[lengths.indexOf(Math.max(...lengths))]);
    ```

10. Using the above countries array, find the country containing only 5 characters.

    ```js
    const fiveCharsCountries = [];
    let i = 0;

    while(i < countries.length) {
        if(countries[i].length === 5) {
            fiveCharsCountries.push(countries[i]);
        }
        i++;
    }

    console.log(fiveCharsCountries);
    ```

11. Find the longest word in the webTechs array

    ```js
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

    const lengthsWebTechs = [];
    for(let i = 0; i < webTechs.length; i++) {
        lengthsWebTechs.push(webTechs[i].length);
    }
    let longestWord = webTechs[lengthsWebTechs.indexOf(Math.max(...lengthsWebTechs))];
    console.log(longestWord);
    ```

12. Use the webTechs array to create the following array of arrays:

    ```js
    const arrayOfArray = [];
    for(let i = 0; i < webTechs.length; i++) {
        arrayOfArray.push([webTechs[i], webTechs[i].length]);
    }
    console.log(arrayOfArray);
    ```

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

    ```js
    const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

    let acronym = ''

    for(let i = 0; i < mernStack.length; i++) {
        acronym += mernStack[i][0];
    }
    console.log(acronym)
    ```

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

    ```js
    const webTechs2 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'];

    for (let i = 0; i < webTechs2.length; i++) {
        console.log(webTechs2[i]);
    }
    ```

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

    ```js
    const fruits = ['banana', 'orange', 'mango', 'lemon'];
    const reverseFruits = [];

    for (let i = fruits.length - 1; i >= 0; i--) {
        reverseFruits.push(fruits[i]);
    }

    console.log(reverseFruits);
    ```

16. Print all the elements of array as shown below.

    ```js
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ];

    for (let i = 0; i < fullStack.length; i++) {
        for (let j = 0; j < fullStack[i].length; j++) {
            console.log(fullStack[i][j].toUpperCase());
        }
    }
    ```

<h2>Exercises: Level 3</h2>

1. Copy countries array(Avoid mutation)

    ```js
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya']; 
    ```
    * Direct assignment ------ !! original may change !! 
    ```js
    console.log(countries); // original
    const copied = countries; // direct assigment

    copied.push('Turkey');

    console.log(copied); // copied changed
    console.log(countries); // original changed
    ```
    * sort() ------ !! original may change !! 
    ```js
    console.log(countries); // original
    const copied = countries.sort(); // sort()

    copied.push('Azerbaijan');  

    console.log(copied); // copied changed
    console.log(countries); // original changed
    ```

2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

    ```js
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];
    ```

    * concat() ------ !! original unchanged !! 
    ```js
    console.log(countries); // original
    const copied = countries.concat('Turkey'); // concat()


    console.log(copied); // copied 
    console.log(countries); // original unchanged
    ```
    * spread operator ------ !! original unchanged !! 
    ```js
    console.log(countries); // original
    const copied = [...countries]; // spread operator

    copied.push('Turkey')

    console.log(copied); // copied changed
    console.log(countries); // original unchanged
    ```
    * Array.from() ------ !! original unchanged !! 
    ```js
    console.log(countries); // original
    const copied = Array.from(countries); // Array.from()

    copied.push('Turkey')

    console.log(copied); // copied changed
    console.log(countries); // original unchanged
    ```
    * slice() ------ !! original unchanged !! 
    ```js
    console.log(countries); // original
    const copied = countries.slice(); // slice()

    copied.push('Turkey')

    console.log(copied); // copied changed
    console.log(countries); // original unchanged
    ```

    ```js
    const sortedCountries = [...countries].sort();
    console.log(sortedCountries);
    ```

3. Sort the webTechs array and mernStack array

    ```js
    const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
    const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

    webTechs.sort();
    mernStack.sort();
    
    console.log(webTechs);
    console.log(mernStack);
    ```

4. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```js
    const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Iceland', 'Japan', 'Kenya'];

    const countriesLand = [];

    for(let i = countries.length - 1 ; i > 0 ; i--) {
        if(countries[i].includes('land')) {
        countriesLand.push(countries.splice(i,1));
        }
    }
    console.log(countriesLand);
    ```

5. Find the country containing the hightest number of characters in the countries array

    ```js
    const longest = []

    for(let i = 0; i < countries.length; i++) {
        longest.push(countries[i].length);
    }
    const longestIndex = longest.indexOf(Math.max(...longest));
    console.log(countries[longestIndex]);
    ```

6. Extract all the countries contain the word 'land' from the countries array and print it as array

    ```js
    const countriesLand = [];

    for(let i = countries.length - 1 ; i > 0 ; i--) {
        if(countries[i].includes('land')) {
        countriesLand.push(countries.splice(i,1));
        }
    }
    console.log(countriesLand);
    ```

7. Extract all the countries containing only four characters from the countries array and print it as array

    ```js
    const fourCharCountries = [];

    for (let i = countries.length - 1 ;i >= 0; i--) {
        if (countries[i].length === 4) {
            fourCharCountries.push(countries[i]);
            countries.splice(i,1);
        } 
    }

    console.log(fourCharCountries);
    ```

8. Extract all the countries containing two or more words from the countries array and print it as array

    ```js
    const twoOrMoreWordsİnCountries = [];

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].includes(' ')) {
            twoOrMoreWordsİnCountries.push(countries[i]);
            countries.splice(i,1)
        } 
    }
    console.log(twoOrMoreWordsİnCountries);
    ```

9. Reverse the countries array and capitalize each country and stored it as an array

    ```js
    const reverseCountries = countries.reverse();
    const changedCountries = [];

    for(let i = 0; i < countries.length; i++) {
        const changedİndex = reverseCountries[i].toUpperCase();
        changedCountries.push(changedİndex);
    }
    console.log(changedCountries);
    ```


