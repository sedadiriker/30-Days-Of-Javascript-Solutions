<h2>Exercises: Level 1</h2>

1. Create an empty object called dog

    ```js
    let dog = {}
    ```

2. Print the the dog object on the console

    ```js
    console.log(dog)
    ```

3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

    ```js
    dog.name = 'Maya'
    dog.legs = 4
    dog.color = 'white'
    dog.age = 5
    dog.bark = function() {
        return 'woof woof'
    }
    ```

4. Get name, legs, color, age and bark value from the dog object

    ```js
    console.log(dog.name)
    console.log(dog['legs'])
    console.log(dog.color)
    console.log(dog['age'])
    console.log(dog.bark())
    ```

5. Set new properties the dog object: breed, getDogInfo

    ```js
    dog.breed = 'poodle'
    dog.getDogInfo = function() {
        return `${this.name} is a ${this.color}, ${this.breed} breed dog and is ${this.age} years old.` 
    }
    ```

<h2>Exercises: Level 2</h2>

1. Find the person who has many skills in the users object.

    ```js
    const users = {
      Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
    };

    let max = 0
    let person = ''
    for (let user in users) {
        if(users[user].skills.length > max) {
            max = users[user].skills.length
            person = user
        }
    }

    console.log(person)
    ```

2. Count logged in users, count users having greater than equal to 50 points from the following object.

    ```js
    let countLogged = 0
    let countPoints50 = 0

    for(const user in users) {
        if(users[user].isLoggedIn) {
            countLogged++
        }
        if(users[user].points >= 50) {
        countPoints50++
        }
    }

    console.log(countLogged)
    console.log(countPoints50)
    ```

3. Find people who are MERN stack developer from the users object

    ```js
    let mernStackDevelopers = []

    for (const user in users) {
      if (
        users[user].skills.includes('MongoDB') &&
        users[user].skills.includes('Express') &&
        users[user].skills.includes('React') &&
        users[user].skills.includes('Node')
      ) {
        mernStackDevelopers.push(user)
      }
    }

    console.log(mernStackDevelopers)
    ```

4. Set your name in the users object without modifying the original users object

    ```js
    // Object.assign() method
    const newUsers = Object.assign({}, users)

    newUsers.Seda = {
        email: 'seda@diriker.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 36,
        isLoggedIn: true,
        points: 60
    }

    console.log(newUsers)

    // Spread operator
    const newUsers = {
        ...users, 
        Seda : {
            email: 'seda@diriker.com',
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 36,
            isLoggedIn: true,
            points: 60
        }
    }

    console.log(newUsers)
    ```

5. Get all keys or properties of users object

    ```js
    const keyUsers = []

    for(const key in users) {
        if(typeof users[key] === 'object') {
            for(const nestedKey in users[key]) {
                if(!keyUsers.includes(nestedKey)) {
                    keyUsers.push(nestedKey)
                }
                }
        }
        keyUsers.push(key)
    }

    console.log(keyUsers)
    ```

6. Get all the values of users object

    ```jsx
    let values = Object.values(users);
    console.log(values);
    ```

7. Use the countries object to print a country name, capital, populations and languages.

    ```js
    const countries = {
      Turkey: {
        capital: "Ankara",
        languages: [
                "Turkish",
        ],
        population: 84339067
      },
      Azerbaijan: {
        capital: "Baku",
        languages: [
                "Azerbaijani",
        ],
        population: 10110116
      },
      Uzbekistan: {
        capital: "Tashkent",
        languages: [
                "Uzbek",
                "Russian",
        ],
        population: 34232050
      },
      India: {
        capital: "New Delhi",
        languages: [
                "Hindi",
                "English",
        ],
        population: 1380004385
      }
    };

    for (const country in countries) {
        console.log('Country:', country);
        console.log('Capital:', countries[country].capital);
        console.log('Populations:', countries[country].population);
        console.log('languages:', countries[country].languages);
        console.log('  ');
    }
    ```

<h2>Exercises: Level 3</h2>

1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

    ```js
    const personAccount = {
        firstName: 'Seda',
        lastName: 'Diriker',
        incomes: [],
        expenses: [],
        totalIncome: function() {
            let totalIncome = 0
            for(let i = 0; i < this.incomes.length; i++) {
                totalIncome += this.incomes[i].amount
            }
            return totalIncome
        },
        totalExpense: function() {
            let totalExpense = 0
            for(let i = 0; i < this.expenses.length; i++) {
                totalExpense += this.expenses[i].amount
            }
            return totalExpense
        },
        accountInfo: function() {
            return `Fullname: ${this.firstName} ${this.lastName}, 
                    Total Income: ${this.totalIncome()}, 
                    Total Expense: ${this.totalExpense()}`
        },
        addIncome: function(incomeName, amount) {
            return this.incomes.push({ incomeName, amount })
        },
        addExpense: function(expenseName, amount) {
            return this.expenses.push({ expenseName, amount })
        },
        accounBalance: function() {
            return `Balance : ${this.totalIncome() - this.totalExpense()}`
        }
    }
    ```

2. Questions:2, 3 and 4 are based on the following two arrays:users and products ()

    ```js
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
      {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
      },
      {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
      },
      {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
      }
    ]
    ```

    Imagine you are getting the above users collection from a MongoDB database.

    a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

    ```js
    function signUp(user) {
        for(let i = 0; i < userss.length; i++) {
            if(userss[i].email === user.email) {
                return 'User already has an account'
            }
        }
        userss.push(user)
        return 'User added successfully.'
    }    
    ```

    b. Create a function called signIn which allows user to sign in to the application

    ```js
    function signIn(emailorUsername, password) {
        for(const user of userss) {
            if((emailorUsername === user.email || emailorUsername === user.username) && (password === user.password)) {
            return 'Successfully logged in'
            }
        }
        return 'You have logged in incorrectly. Please check your information again and log in.'
    }
    ```

3. The products array has three elements and each of them has six properties.

    a. Create a function called rateProduct which rates the product

    ```js
    function rateProduct(productId, userId, rating) {
      for (const product of products) {
        if (product._id === productId) {
          product.ratings.push({ userId, rate: rating });
          return 'Product rated successfully.';
        }
      }
      return 'Product not found.';
    }
    ```

    b. Create a function called averageRating which calculate the average rating of a product

    ```js
    function averageRating(productId) {
        for(const product of products) {
            if(product._id === productId) {
                if(product.ratings.length > 0) {
                    let sumRatings = 0
                    for(let i = 0; i < product.ratings.length; i++) {
                    sumRatings += product.ratings[i].rate             
                    }
                    return sumRatings / product.ratings.length
                }else {
                    return 0
                }    
            }
        }
        return 'No matching products found'
    }
    ```

4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

    ```js
    function likeProduct(productId, userıd) {
        for(const product of products) {
            if(productId === product._id) {
                if(product.likes.length === 0) {
                product.likes.push(userıd)
                    return 'Product liked'
                }else{
                    product.likes = product.likes.filter(ıd => ıd !== userıd)
                    return 'Like Removed'
                } 
            }
        }
        return 'No matching products found'
    }

    console.log(likeProduct('aegfal', 'fg12cy')) // removed
    console.log(products[1].likes) // removed

    console.log(likeProduct('aegfal', 'fg12cy')) // liked
    console.log(products[1].likes) // push liked

    console.log(likeProduct('aegfa', 'fg12cy')) // not found
    ```

