<h2>Exercises:  Level 1</h2>

```js
    const a = [4, 5, 8, 9]
    const b = [3, 4, 5, 7]
    const countries = ['Finland', 'Sweden', 'Norway']
```

1. create an empty set

    ```js
    const emptySet = new Set()
    ```

2. Create a set containing 0 to 10 using loop

    ```js
    const numbers = new Set()

    for(let i = 0; i <= 10; i++) {
        numbers.add(i)
    }

    console.log(numbers)
    ```

3. Remove an element from a set

    ```js
    numbers.delete(0)

    console.log(numbers)    
    ```

4. Clear a set

    ```js
    numbers.clear()

    console.log(numbers)
    ```

5. Create a set of 5 string elements from array

    ```js
    const cities = ['Ankara', 'İstanbul', 'Tekirdağ', 'Gaziantep', 'Hakkari']

    const setOfCities = new Set(cities)

    console.log(setOfCities)
    ```

6. Create a map of countries and number of characters of a country

    ```js
    const mapOfCountries = new Map()

    for(const country of countries) {
        mapOfCountries.set(country, country.length)
    }

    console.log(mapOfCountries)
    ```

<h2>Exercises:  Level 2</h2>

1. Find a union b

    ```js
    const union = [...a, ...b]
    console.log(new Set(union))
    ```

2. Find a intersection b

    ```js
    const intersection = new Set(a.filter(num => b.includes(num)))

    console.log(intersection)
    ```

3. Find a with b

    ```js
    const difference = new Set(a.filter(num => !new Set(b).has(num)))

    console.log(difference)
    ```

<h2>Exercises:  Level 3</h2>

1. How many languages are there in the countries object file.

    ```js
    const languages = new Set()

    for(const country of importedcountries) {
        for(const language of country.languages) {
            languages.add(language)
        }
    }

    console.log(languages.size)
    ```

2. Use the countries data to find the 10 most spoken languages:

    ```js
    function mostSpokenLanguages (importedcountries, count) {
        const countLanguage = {}

        for(const country of importedcountries) {
            for(const language of country.languages) {
                if(countLanguage[language]) {
                countLanguage[language]++
                }else {
                countLanguage[language] = 1
                }
            }
        }

        const sortedLanguages = Object.entries(countLanguage).sort((a,b) => b[1] - a[1])

        const sliceLanguages = sortedLanguages.slice(0, count)

        const result = sliceLanguages.map(([language, count]) => ({ [language]: count }));

        return result

    }

console.log(mostSpokenLanguages(importedcountries, 3))
    ```


