// Exercises: Level 1

// 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Seda',
    lastName = 'Diriker',
    country = 'Turkey',
    city = 'Tekirdağ',
    age = 35,
    isMarried = true,
    year = 2023;

console.log(typeof firstName); 
console.log(typeof lastName); 
console.log(typeof country); 
console.log(typeof city); 
console.log(typeof age); 
console.log(typeof isMarried); 
console.log(typeof year); 


// 2- Check if type of '10' is equal to 10

console.log('10' === 10);


// 3- Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') === 10);


// 4- Boolean value is either true or false.
    // i.Write three JavaScript statement which provide truthy value.

console.log(!!"Merhaba");
console.log(5 > 2);
console.log(!false);

    // ii. Write three JavaScript statement which provide falsy value.

console.log(0 > 1);
console.log(!!0);
console.log(!true);


// 5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log( 4 > 3 );
console.log( 4 >= 3 );
console.log( 4 < 3 );
console.log( 4 <= 3 );
console.log( 4 == 4 );
console.log( 4 != 4 );
console.log( 4 !== 4 );
console.log( 4 != '4' );
console.log( 4 == '4');
console.log( 4 === '4');
console.log(('python'.length) != ('jargon'.length) );


// 6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on')) && ('python'.includes('on')));


// 7- Use the Date object to do the following activities

const datE = new Date();

let yEAr = (datE.getFullYear()),
    monTh = datE.getMonth() + 1,
    daTe = datE.getDate(),
    dayNumber = datE.getDay(),
    hours = datE.getHours(),
    miNute = datE.getMinutes(),
    time = datE.getTime() / 1000   // convert milliseconds to seconds

console.log(yEAr);
console.log(monTh);
console.log(daTe);
console.log(dayNumber);
console.log(hours);
console.log(miNute);
console.log(time);



//Exercises: Level 2

// 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).


let base = prompt("Enter the base :"),
    height = prompt("Enter the height :"),
    area = 0.5 * base * height;

console.log('The area of the triangle is', area);
alert(`The area of the triangle is ${area}`);



// 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)


let a = parseFloat(prompt('Enter side a: ')),
    b = parseFloat(prompt('Enter side b: ')),
    c = parseFloat(prompt('Enter side c: ')),
    periMeter = a + b + c ;

console.log('The perimeter of the triangle is', periMeter);
alert(`The perimeter of the triangle is ${periMeter}`);



// 3- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))


let length = parseFloat(prompt("Enter the length:")),  
    width = parseFloat(prompt("Enter the width:")),
    arEa = length * width,
    perimeter = 2 * (length + width);

console.log("The area of the rectangle is", arEa);
console.log("The perimeter of the rectangle is", perimeter);

alert(`The area of the rectangle is ${arEa}`);            
alert(`The perimeter of the rectangle is ${perimeter}`);



// 4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


const pi = Math.PI;

let radius = parseFloat(prompt('Enter the radius :')),    
    aRea = pi * (radius ** 2),
    circumference = 2 * pi * radius;

console.log(`The area of the circle is ${aRea}`);                    
console.log(`The circumference of the circle is ${circumference}`);

alert(`The area of the circle is ${aRea}`);                    
alert(`The circumference of the circle is ${circumference}`);


// 5- Calculate the slope, x-intercept and y-intercept of y = 2x -2


let slope_1 = 2,
    x_intercept = 2 / slope_1,
    y_intercept = -2;

console.log("Slope:", slope_1);
console.log("x-intercept :", x_intercept);
console.log("y-intercept :", y_intercept);



// 6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)


let x1 = 2;
    y1 = 2,
    x2 = 6,
    y2 = 10,
    slope_2 = (y2 - y1) / (x2 - x1);

console.log("The slope between the points is :", slope_2);


// 7- Compare the slope of above two questions.

if (slope_1 > slope_2) {
console.log("Slope 1 is greater than Slope 2");
} else if (slope_1 < slope_2) {
console.log("Slope 2 is greater than Slope 1");
} else {
console.log("Slope 1 and Slope 2 are equal");
}


// 8- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.






// 9- Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hourss = parseFloat(prompt('Enter hours :')),
    ratePerHour = parseFloat(prompt('Enter rate per hour :')),
    pay = hours * ratePerHour;

console.log('Your weekly earning is', pay);


// 10- If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = prompt('Enter your name :'),
    message = (name.length > 7) ? 'Your name is long' : 'Your name is short';

console.log(message);


// 11- Compare your first name length and your family name length and you should get this output.


let firstname = prompt('Enter your name :'),
    lastname = prompt('Enter your last name :');
    
switch(true){
    case firstname.length > lastname.length:
        console.log(`Your first name, ${firstname} is longer than your family name, ${lastname}`);
        break
    case firstname.length < lastname.length:
        console.log(`Your family name, ${lastname} is longer than your first name ${firstname}`);
        break
    default:
        console.log("Your first name and family name have the same length.");
}




// 12- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250,
    yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you.`)
    

// 13- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

const dAte = new Date();

let birthYear = (prompt('Enter your birth year :')),
    aGe = dAte.getFullYear() - birthYear;

let messAge = aGe >= 18
    ? `You are ${aGe}. You are old enough to drive` 
    : `You are ${aGe}. You will be allowed to drive after ${18 - aGe} years.`;

console.log(messAge);


// 14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

const secondsPerMinute = 60,
    minutesPerHour = 60,
    hoursPerDay = 24,
    daysPerYear = 365;
            
let years = prompt("Enter number of years you have lived:");
console.log("You have lived", years * daysPerYear * hoursPerDay * minutesPerHour * secondsPerMinute, "seconds.");



// 15- Create a human readable time format using the Date time object

const date = new Date();

let yeAr = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours() ,
    minute = date.getMinutes() ;

// YYYY-MM-DD HH:mm
console.log(`${yeAr}-${month}-${day} ${hour}:${minute}`);

// DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${yeAr} ${hour}:${minute}`);

// DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${yeAr} ${hour}:${minute}`);



// Exercises: Level 3

console.log(`${yeAr}-${month.toString().padStart(2,'0')}-${day.toString().padStart(2,'0')} ${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}`)












