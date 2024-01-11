// EXERCİSES: LEVEL 1

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37, 100]

const[e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, sw, den, nor] = countries

// 3. Destructure the rectangle object by its properties or keys.

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const {width, height, area, perimeter} = rectangle

// EXERCİSES: LEVEL 2

// 1. Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

users.forEach(user => {
    const {name, scores, skills, age} = user
    console.log(Object.keys({name, scores, skills, age}))
})

/*
for(const user of users) {
    console.log(Object.keys(user))
}
*/

// 2. Find the persons who have less than two skills

const filterUser = users.filter(({skills}) => skills.length < 2)

console.log(filterUser)


// EXERCİSES: LEVEL 3

// 1. Destructure the countries object print name, capital, population and languages of all countries

import { countries as importedcountries } from "./countries.js"

for(const country of importedcountries) {
    const {name, capital, population, languages} = country
    console.log(name,capital,population,languages)
}

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
/*
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

const [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student

console.log(name, skills, jsScore, reactScore)
*/
// 3. Write a function called convertArrayToObject which can convert the array to a structure object.

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject (arr) {
    const convertedArr = arr.map(([name, skills, scores]) => ({
        name,
        skills,
        scores
    }))
    return convertedArr
}

console.log(convertArrayToObject(students))

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

const student = {
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
    ],
    backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
        { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
}

const studentCopy = {...student}

console.log(studentCopy)

// * Add Bootstrap with level 8 to the front end skill sets

studentCopy.skills.frontEnd.push({skill: 'Bootstrap', level: 8})

// * Add Express with level 9 to the back end skill sets

studentCopy.skills.backEnd.push({skill: 'Express', level:9})

// * Add SQL with level 8 to the data base skill sets

studentCopy.skills.dataBase.push({skill: 'SQL', level:8})

// * Add SQL without level to the data science skill sets

studentCopy.skills.dataScience.push('SQL')

console.log(studentCopy)





