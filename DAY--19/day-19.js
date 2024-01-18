// EXERCİSES: LEVEL 1

// 1. Create a closure which has one inner function

function sayHello() {
    let word = 'Hello'
    function sentence() {
        return `${word} World!`
    }
    return sentence
}

let message = sayHello()

console.log(message())



// EXERCİSES: LEVEL 2

// 1. Create a closure which has three inner functions

function sayHelloWorld() {

    function firstInner() {
        return 'Hello'
    }

    function secondInner() {
        return 'World'
    }

    function thirdInner() {
        return `${firstInner()} ${secondInner()}!`
    }

    return {
        first : firstInner,
        second : secondInner,
        third : thirdInner
    }     
}

const sentence = sayHelloWorld()

console.log(sentence.first())
console.log(sentence.third())


// EXERCİSES: LEVEL 3

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personaccount = {
        
    firstName : 'Seda',
    lastName : 'Diriker',
    incomes: new Map(),
    expenses: new Map(),

    totalIncome() {
        let incomes = []
        for(const [description, income] of this.incomes) {
            incomes.push(income)
        }

        return `Total Income : ${incomes.reduce((total,income) => total + income,0)}`
    },

    totalExpense() {
        let expenses = []
        for(const [description, expense] of this.expenses) {
            expenses.push(expense)
        }

        return `Total Expense : ${expenses.reduce((total,expense) => total + expense,0)}`
    },

    addIncome(description, income) {
        this.incomes.set(description,income)
    },

    addExpense(description, expense) {
        this.expenses.set(description, expense)
    },

    accountBalance() {
        return `Balance : ${this.totalIncome().match(/\d+/g) - this.totalExpense().match(/\d+/g)}`

    },

    accountInfo() {
        console.log(`Name : ${this.firstName} ${this.lastName}`) 
        console.log(this.totalIncome())
        console.log(this.totalExpense())
        console.log(this.accountBalance())
    }

}

function personAccount() {
    
}