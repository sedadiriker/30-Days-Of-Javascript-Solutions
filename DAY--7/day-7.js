// EXERCİSES: LEVEL 1

// 1. Declare a function fullName and it print out your full name.

function fullName() {
    let fullName = 'Seda Diriker';
    console.log(fullName); 
    }

fullName();


// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName('Seda', 'Diriker'))

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers (x, y) {
    return x + y;
}

console.log(addNumbers(1, 3));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle (length, width) {
    return length * width;
}

console.log(areaOfRectangle(5,3));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle (length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(5,3));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism (length, width,  height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(5, 3, 2));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const pi = Math.PI
function areaOfCircle(r) {
    return pi * r * r;
}

console.log(areaOfCircle(2));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    return 2 * pi * r;
}

console.log(circumOfCircle(3));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
    return mass / volume;
}

console.log(density(60, 30));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(totalDistance, time) {
    return totalDistance / time;
}

console.log(speed(50, 2))

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity) {
    return mass * gravity;
}

console.log(weight(100, 5.2));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC) {
    return (oC * 9 / 5) + 32;
}

console.log(convertCelsiusToFahrenheit(5));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bmi(weight, height) {
    const bmiCalculate = weight / (height * height);

    if (bmiCalculate < 18.5) {
        return `BMI : ${bmiCalculate} -- Underweight`;
    } else if (bmiCalculate >= 18.5 && bmiCalculate <= 24.9) {
        return `BMI : ${bmiCalculate} -- Normal Weight`;
    } else if (bmiCalculate >= 25 && bmiCalculate <= 29.9) {
        return `BMI : ${bmiCalculate} -- Overweight`;
    } else {
        return `BMI : ${bmiCalculate} -- Obese`;
    }

}

console.log(bmi(61, 1.68))

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    switch(month) {
        case 'December':
        case 'January':
        case 'February':
            return 'Winter';
        case 'March':
        case 'April':
        case 'May':
            return 'Spring';
        case 'June':
        case 'July':
        case 'August':
            return 'Summer'
        case 'September':
        case 'October':
        case 'November':
            return 'Autumn';
        default:
            return 'Invalid month';   
    }
}

console.log(checkSeason('June'));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c) {
    
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(0, -10, -2))



// EXERCİSES: LEVEL 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        return "Invalid equation";
    } else if (a === 0) {
        return -c / b;
    } else if (b === 0) {
        return -c / a;
    }else{
        return -c / b;
    }
}

console.log(solveLinEquation(5, 2, -10));

// 2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation(a, b, c) {
    // Diskriminant formul
    const discriminant = b**2 - 4*a*c;

    if (discriminant < 0) {
        // no real roots
        return [];
    } else if (discriminant === 0) {
        // two roots are the same
        const root = -b / (2*a);
        return [root];
    } else {
        // There are two different roots
        const root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return [root1, root2];
    }
}

console.log(solveQuadEquation(-1, 0, -2))

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([1,2,3])

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');

    console.log(`${day}/${month}/${year} ${hour}:${minute}`) 
}

showDateTime() // now

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;

    console.log(x, y);
}

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
    const newArr = [];
    for(let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr, item) {
    arr.push(item);
    return arr;
}

// const numbers = [1, 2, 3, 4, 5]
console.log(addItem(numbers, 6));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(arr, index) {
    arr.splice(index,1)
    return arr
}

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        sum += i;
    }
    return sum;
}

// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range. 

function sumOfOdds(num) {
    let sumOdds = 0;
    for (let i = 1; i < num; i++) {
        if(i % 2 !== 0) {
            sumOdds += i;
        }
    }
    return sumOdds;
}

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(num) {
    let sumEvens = 0;
    for (let i = 1; i < num; i++) {
        if(i % 2 === 0) {
            sumEvens += i;
        }
    }
    return sumEvens;
}

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(num) {
    const evens = [];
    const odds = [];
    for (let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
            evens.push(i);
        }else {
            odds.push(i);
        } 
    }
    console.log(`The number of odds are ${odds.length}.`);
    console.log(`The number of evens are ${evens.length}.`);
}
evensAndOdds(100)

// 14. Write a function which takes any number of arguments and return the sum of the arguments

const sum = (...args) => {
    let sum = 0;
    for(const element of args) {
        sum += element;
    }
    return sum
}

console.log(sum(1,2,3,4))

// 15. Writ a function which generates a randomUserIp.

function randomUserIp() {
    let userIp = '';
    for (let i = 0; i < 4; i++) {
        if (i > 0) {
            userIp += '.';
        }
        let num = Math.floor(Math.random() * 256);
        userIp += num;
    }
    return userIp;
}

console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress

function randomMacAddress() {
    const characters = "0123456789ABCDEF";
    let macAddress = "";
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        macAddress += characters[randomIndex];
        }
        if (i !== 5) {
        macAddress += ":";
        }
    }
    return macAddress;
}

console.log(randomMacAddress())

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    const characters = '0123456789abcdef';
    let hexadecimalNumber = '#';
    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * characters.length);
        hexadecimalNumber += characters[index];
    }
    return hexadecimalNumber;
}

console.log(randomHexaNumberGenerator());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let id = '';

    while (id.length < 7) {
        let index = Math.floor(Math.random() * chars.length);
        let charsIn = chars[index];
            id += charsIn;
    }
    return id;
}

console.log(userIdGenerator());


// EXERCİSES: LEVEL 3

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.


        /*    The answer is in md    */


// 2. Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

console.log(`rgb(${red},${green},${blue})`);
}

rgbColorGenerator();

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(num) {
    const colors = [];
    for (let i = 0; i < num; i++) {
        let color = '#' + Math.floor(Math.random() * 16777216).toString(16); 
        colors.push(color);
        }
    return colors;
    }

console.log(arrayOfHexaColors(3));

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
    const rgbArr = [];
    for (let i = 0; i < num; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256); 
        const randomRgb = `rgb(${red},${green},${blue})`
        rgbArr.push(randomRgb)
        }
    return rgbArr;
}

console.log(arrayOfRgbColors(3));

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexaColor) {
    const red = parseInt(hexaColor.substring(1, 3), 16);
    const green = parseInt(hexaColor.substring(3, 5), 16);
    const blue = parseInt(hexaColor.substring(5, 7), 16);
    return "rgb(" + red + "," + green + "," + blue + ")";
}

console.log(convertHexaToRgb('#479007'));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rgbColor) {
    const rgbValues = rgbColor.match(/\d+/g);

    const red = parseInt(rgbValues[0]).toString(16).padStart(2, '0');
    const green = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
    const blue = parseInt(rgbValues[2]).toString(16).padStart(2, '0');

    return '#' + red + green + blue;
}


console.log(convertRgbToHexa('rgb(63,178,223)'));

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(numberType, num) {
    if (numberType === 'hexa') {
        const hexColors = [];
        for (let i = 0; i < num; i++) {
            let color = '#' + Math.floor(Math.random() * 16777216).toString(16);
            hexColors.push(color);
        }
        return hexColors;
    } else if (numberType === 'rgb') {
        const rgbColors = [];
        for (let i = 0; i < num; i++) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const randomRgb = `rgb(${red},${green},${blue})`;
            rgbColors.push(randomRgb);
        }
        return rgbColors;
    } else {
        return [];
    }
}

console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    const arrayShuffle = [];

    while (array.length > 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomElement = array.splice(randomIndex, 1)[0];
        arrayShuffle.push(randomElement);
    }

    return arrayShuffle;
}

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
    let numFactorial = 1
    for(let i = 2; i <= num; i++) {
        numFactorial *= i
    }
    return numFactorial
}

console.log(factorial(5));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(param) {
    return param === null || param === undefined || param === '' || [].length === 0;
}

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

const sUm = (...args) => {
    let sum = 0;
    for(const element of args) {
        sum += element;
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) === 'number') {
            sum += array[i]
        } else {
            return'Enter an array containing numbers.'
        }   
    }
    return sum
}

console.log(sumOfArrayItems([1,2,3,4,5]));
console.log(sumOfArrayItems([1,2,3, 'a']));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) === 'number') {
            sum += array[i]
        } else {
            return'Enter an array containing numbers.'
        }   
    }
    return sum / array.length
}

console.log(sumOfArrayItems([1,2,3,4,5]));
console.log(sumOfArrayItems([1,2,3, 'a']));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(array) {
    if(array.length < 5) {
        return 'item not found.';
    }else{ 
        array.splice(4,1,array[4].toUpperCase());
        return array;
    }
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
    if(num <= 1) {
        return 'It is not a prime number.';
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return 'It is not a prime number.';
        }
    }
    return 'It is a prime number.';
}

console.log(isPrime(25));

// 16. Write a functions which checks if all items are unique in the array.

function checkUniqueArray(array) {
    const firstItem = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] === firstItem) {
            return 'Array is not unique.';
        }
    }
    return 'Array is unique.';
}

console.log(checkUniqueArray([1,2,3,4,5]))


// 17. Write a function which checks if all the items of the array are the same data type.

function checkData(array) {
    const firstType = typeof array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (typeof array[i] !== firstType) {
            return 'İtems of the Array are not same datatype.';
        }
    } 
    return 'İtems of the Array are same datatype.';
}

console.log(checkData([1,2,3,4,5]))
console.log(checkData([1,2,3,4,5,'a']))

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variable) {
    const variableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        return variableRegex.test(variable);
}

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function arrayOfSeven() {
    const uniqueArr =[];

    while(uniqueArr.length < 7 ) {
        let randomNum = Math.floor(Math.random() * 10);

        if(!uniqueArr.includes(randomNum)){
            uniqueArr.push(randomNum);
        }
    }

    return uniqueArr;
}

console.log(arrayOfSeven());


// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = countries => countries.slice().reverse();

console.log(reverseCountries(["Turkey", "Canada", "Denmark", 'Norway']));