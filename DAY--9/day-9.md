
<h2>Exercises:  Level 1</h2>

    ```js
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
    ]
    ```

1. Explain the difference between forEach, map, filter, and reduce.

    <h3>ForEach()</h3>
    ```js
    It loops over each element in the array and runs the specified function for an element. But forEach does not return a result, it just completes the array and performs the specified action for each element.
    ```
    
    <h3>map()</h3>
    ```js
    The map function operates on each array element and creates a new array consisting of the return value of the specified function for each element. When map is used, a new array is created as a result of applying the function on each element.
    ```

     <h3>filter()</h3>
    ```js
    filter returns a new array containing elements that meet a given condition. If the condition is met, the element is added to the new array, otherwise it is not added.
    ```

    <h3>reduce()</h3>
    ```js
    reduce reduces the array to a single value. Operates on each array element and accumulates the resulting value. It can take an initial value and obtain the result value by applying the specified function on each element.
    ```

2. Define a callback function before you use it in forEach, map, filter or reduce.

    ```jsx
    // Callback function definition
    function callback(element) {
      // Function body
      // Perform some action on the element
    }

    // Using the callback function in forEach
    array.forEach(callback);
    ```

3. Use forEach to console.log each country in the countries array.

    ```js
    countries.forEach(country => console.log(country))
    ```

4. Use forEach to console.log each name in the names array.

    ```js
    names.forEach(name => console.log(name))

    ```

5. Use forEach to console.log each number in the numbers array.

    ```js
    numbers.forEach(number => console.log(number))
    ```

6. Use map to create a new array by changing each country to uppercase in the countries array.

    ```js
    const newCountries = countries.map(country => country.toUpperCase())

    console.log(newCountries)
    ```

7. Use map to create an array of countries length from countries array.

    ```js
    const countriesLength = countries.map(country => country.length)

    console.log(countriesLength)
    ```

8. Use map to create a new array by changing each number to square in the numbers array

    ```js
    const squareNumbers = numbers.map(number => number ** 2)

    console.log(squareNumbers)
    ```

9. Use map to change to each name to uppercase in the names array

    ```js
    console.log(
        names.map(name => name.toUpperCase())
    )
    ```

10. Use map to map the products array to its corresponding prices.

    ```js
    console.log(
        products.map(product => product.price)
    )
    ```

11. Use filter to filter out countries containing land.

    ```js
    console.log(
        countries.filter(country => country.includes('land'))
    )
    ```

12. Use filter to filter out countries having six character.

    ```js
    console.log(
        countries.filter(country => country.length === 6)
    )
    ```

13. Use filter to filter out countries containing six letters and more in the country array.

    ```js
    console.log(
        countries.filter(country => country.length >= 6)
    )
    ```

14. Use filter to filter out country start with 'E';

    ```js
    console.log(countries.filter(country => country[0] === 'E'))
    ```

15. Use filter to filter out only prices with values.

    ```js
    console.log(
        products.filter(product => typeof product.price === 'number')
    )
    ```

16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

    ```js
    function getStringLists(arr) {
    return arr.filter(element => typeof element === 'string')
    }

    console.log(getStringLists([1,'30', 'Days', true, 'Of', 3.14, 'Javascript']))
    ```

17. Use reduce to sum all the numbers in the numbers array.

    ```js
    console.log(
        numbers.reduce((acc, cur) => acc + cur, 0)
    )
    ```

18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

    ```js
    const concatenateCountries = countries.reduce((acc,country, index) => {
        return acc + (index === countries.length - 1 ? ' and ' + country + ' are north European countries' : ', ' + country)
    }, 'Estonia')

    console.log(concatenateCountries)
    ```

19. Explain the difference between some and every

    <h3>some()</h3>
    ```js
    This method checks whether at least one element in the array has the specified placement. If at least one element has the specified member, the actual value is returned; otherwise it returns false. In a nutshell, it checks whether at least one element can be installed.
    ```
    
    <h3>every()</h3>
    ```js
    Bu metod, dizideki tüm elemanların belirtilen koşulu sağlayıp sağlamadığını kontrol eder. Eğer tüm elemanlar belirtilen koşulu sağlarsa true değeri döner; aksi halde false döner. Özetle, tüm elemanların koşulu sağlayıp sağlamadığını kontrol eder.
    ```

20. Use some to check if some names' length greater than seven in names array

    ```js
    console.log(
        names.some(name => name.length > 0)
    )
    ```

21. Use every to check if all the countries contain the word land

    ```js
    console.log(
        countries.every(country => country.includes('land'))
    )
    ```

22. Explain the difference between find and findIndex.

    <h3>find()</h3>
    ```js
    This method finds the first element in an array that satisfies a certain condition and returns this element. If no element is found that satisfies the condition, undefined is returned.
    ```

    <h3>findIndex()</h3>
    ```js
    This method finds the index of the first element in an array that meets a certain condition and returns this index. If an element that satisfies the condition is not found, -1 is returned.
    ```

23. Use find to find the first country containing only six letters in the countries array

    ```js
    console.log(
        countries.find(country => country.length === 6)
    )
    ```

24. Use findIndex to find the position of the first country containing only six letters in the countries array

    ```js
    console.log(
        countries.findIndex(country => country.length === 6)
    )
    ```

25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

    ```js
    console.log(
        countries.findIndex(country => country === 'Norway')
    )
    ```

26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

    ```js
    console.log(
        countries.findIndex(country => country === 'Russia')
    )
    ```

<h2>Exercises:  Level 2</h2>

1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

    ```js
    const filteredProducts = products.filter(product => typeof product.price === 'number')

    const totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0);

    console.log(totalPrice) 
    ```

2. Find the sum of price of products using only reduce reduce(callback)

    ```js
    const sumOfPrice = products.reduce((acc, product) =>
        typeof product.price === 'number' ? acc + product.price : acc
    ,0)

console.log(sumOfPrice)
    ```

3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

    ```js
    import { countries as importedcountries } from "./countries.js"

    function categorizeCountries(pattern) {
        return importedcountries.filter(country => country.name.includes(pattern))
    }
    ```

4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

    ```jsx
    function getInitialLetterCount() {
        const initialLetterCount = {};
        countries.forEach(function(country) {
            const initialLetter = country[0].toUpperCase();
            if (initialLetterCount.hasOwnProperty(initialLetter)) {
            initialLetterCount[initialLetter]++;
            } else {
            initialLetterCount[initialLetter] = 1;
            }
        });
        return Object.entries(initialLetterCount).map(function([letter, count]) {
            return { letter, count };
        });
    }

    console.log(getInitialLetterCount());
    ```

5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

    ```js
    function getFirstTenCountries() {
        return importedcountries.slice(0, 10)
        }

console.log(getFirstTenCountries())
    ```

6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

    ```js
    function getLastTenCountries() {
        return importedcountries.slice(-10)
    }

        console.log(getLastTenCountries())
    ```

7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

    ```jsx
    function findMostFrequentInitialLetter() {
        const initialLetterCount = {};
        countries.forEach(function(country) {
            const initialLetter = country[0].toUpperCase();
            if (initialLetterCount.hasOwnProperty(initialLetter)) {
            initialLetterCount[initialLetter]++;
            } else {
            initialLetterCount[initialLetter] = 1;
            }
        });
        let mostFrequentLetter;
        let maxCount = 0;
        Object.entries(initialLetterCount).forEach(function([letter, count]) {
            if (count > maxCount) {
            mostFrequentLetter = letter;
            maxCount = count;
            }
        });
        return mostFrequentLetter;
    }

    console.log(findMostFrequentInitialLetter());
    ```

<h2>Exercises:  Level 3</h2>

1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

    ```jsx
    // Sort countries by name
    const countriesByName = countries.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    console.log(countriesByName);

    // Sort countries by capital
    const countriesByCapital = countries.sort(function(a, b) {
        return a.capital.localeCompare(b.capital);
    });
    console.log(countriesByCapital);

    // Sort countries by population
    const countriesByPopulation = countries.sort(function(a, b) {
        return b.population - a.population;
    });
    console.log(countriesByPopulation);
    ```

2. Find the 10 most spoken languages:

    ```jsx
    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 10))

    [
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ]

    // Your output should look like this
    console.log(mostSpokenLanguages(countries, 3))

    [
    {country: 'English',count: 91},
    {country: 'French',count: 45},
    {country: 'Arabic',count: 25},
    ]
    ```

    ```jsx
    function mostSpokenLanguages(countries, count) {
        const languageCount = {};
        countries.forEach(function(country) {
            country.languages.forEach(function(language) {
            if (languageCount.hasOwnProperty(language)) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
            });
        });
        const sortedLanguages = Object.entries(languageCount).sort(function(a, b) {
            return b[1] - a[1];
        });
        return sortedLanguages.slice(0, count).map(function([language, count]) {
            return { country: language, count };
        });
    }

    console.log(mostSpokenLanguages(countries, 10));
    console.log(mostSpokenLanguages(countries, 3));
    ```

3. Use countries_data.js file create a function which create the ten most populated countries

    ```jsx
    console.log(mostPopulatedCountries(countries, 10))

    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]

    console.log(mostPopulatedCountries(countries, 3))

    [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000}
    ]
    ```

    ```jsx
    function mostPopulatedCountries(countries, count) {
        return countries
            .sort(function(a, b) {
                return b.population - a.population;
            })
            .slice(0, count)
            .map(function(country) {
                return { country: country.name, population: country.population };
            });
    }

    console.log(mostPopulatedCountries(countries, 10));
    console.log(mostPopulatedCountries(countries, 3));
    ```

4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

    ```jsx
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

    console.log('Count:', statistics.count()) // 25

    console.log('Sum: ', statistics.sum()) // 744

    console.log('Min: ', statistics.min()) // 24

    console.log('Max: ', statistics.max()) // 38

    console.log('Range: ', statistics.range()) // 14

    console.log('Mean: ', statistics.mean()) // 30

    console.log('Median: ',statistics.median()) // 29

    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}

    console.log('Variance: ',statistics.var()) // 17.5

    console.log('Standard Deviation: ', statistics.std()) // 4.2

    console.log('Variance: ',statistics.var()) // 17.5

    console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
    ```

    ```jsx
    const statistics = {
        data: [],
        addData: function(newData) {
            this.data = this.data.concat(newData);
        },
        count: function() {
            return this.data.length;
        },
        sum: function() {
            return this.data.reduce(function(acc, num) {
            return acc + num;
            }, 0);
        },
        min: function() {
            return Math.min(...this.data);
        },
        max: function() {
            return Math.max(...this.data);
        },
        range: function() {
            return this.max() - this.min();
        },
        mean: function() {
            return this.sum() / this.count();
        },
        median: function() {
            const sortedData = this.data.sort(function(a, b) {
            return a - b;
            });
            const middleIndex = Math.floor(this.count() / 2);
            if (this.count() % 2 === 0) {
            return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
            } else {
            return sortedData[middleIndex];
            }
        },
        mode: function() {
            const numberCount = {};
            this.data.forEach(function(num) {
            if (numberCount.hasOwnProperty(num)) {
                numberCount[num]++;
            } else {
                numberCount[num] = 1;
            }
            });
            let mode;
            let maxCount = 0;
            Object.entries(numberCount).forEach(function([num, count]) {
            if (count > maxCount) {
                mode = Number(num);
                maxCount = count;
            }
            });
            return { mode, count: maxCount };
        },
        var: function() {
            const mean = this.mean();
            const squaredDifferences = this.data.map(function(num) {
            return Math.pow(num - mean, 2);
            });
            return squaredDifferences.reduce(function(acc, num) {
            return acc + num;
            }, 0) / this.count();
        },
        std: function() {
            return Math.sqrt(this.var());
        },
        freqDist: function() {
            const frequencyCount = {};
            this.data.forEach(function(num) {
            if (frequencyCount.hasOwnProperty(num)) {
                frequencyCount[num]++;
            } else {
                frequencyCount[num] = 1;
            }
            });
            return Object.entries(frequencyCount).map(function([num, count]) {
            return [Number(num), count];
            });
        }
    };

    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

    statistics.addData(ages);

    console.log('Count:', statistics.count());
    console.log('Sum:', statistics.sum());
    console.log('Min:', statistics.min());
    console.log('Max:', statistics.max());
    console.log('Range:', statistics.range());
    console.log('Mean:', statistics.mean());
    console.log('Median:', statistics.median());
    console.log('Mode:', statistics.mode());
    console.log('Variance:', statistics.var());
    console.log('Standard Deviation:', statistics.std());
    console.log('Frequency Distribution:', statistics.freqDist());
    ```


