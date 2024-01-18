
<h2>Exercises:  Level 1</h2>

1. Create a closure which has one inner function

    ```js
    function sayHello() {
      let word = 'Hello'
      function sentence() {
          return `${word} World!`
      }
      return sentence
  }

  let message = sayHello()

  console.log(message())
    ```

<h2>Exercises:  Level 2</h2>

1. Create a closure which has three inner functions

    ```js
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
    ```

<h2>Exercises:  Level 3</h2>

1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

    ```jsx
    function personAccount(firstName, lastName) {
      let incomes = [];
      let expenses = [];

      function addIncome(description, amount) {
        incomes.push({ description, amount });
      }

      function addExpense(description, amount) {
        expenses.push({ description, amount });
      }

      function totalIncome() {
        let total = 0;
        for (let income of incomes) {
          total += income.amount;
        }
        return total;
      }

      function totalExpense() {
        let total = 0;
        for (let expense of expenses) {
          total += expense.amount;
        }
        return total;
      }

      function accountInfo() {
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Total Income: ${totalIncome()}`);
        console.log(`Total Expense: ${totalExpense()}`);
        console.log(`Account Balance: ${totalIncome() - totalExpense()}`);
      }

      return {
        addIncome,
        addExpense,
        accountInfo
      };
    }

    const johnDoeAccount = personAccount('John', 'Doe');
    johnDoeAccount.addIncome('Salary', 3000);
    johnDoeAccount.addExpense('Rent', 1000);
    johnDoeAccount.addExpense('Food', 500);
    johnDoeAccount.accountInfo();
    ```

