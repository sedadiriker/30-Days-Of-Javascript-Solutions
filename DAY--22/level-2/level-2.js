import {countries} from "./countries.js"

for(let i = 0; i < countries.length; i+=6) {
    let division = document.createElement('div')
    division.style.display = "flex"
    division.style.justifyContent = "center"
    
    for(let j = 0; j < 6; j++) {
        let pElement = document.createElement('p')
        division.append(pElement)
        pElement.textContent = countries[i + j]
        pElement.style.border = "1px solid black"
        pElement.style.width = "15rem"
        pElement.style.height = "15rem"
        pElement.style.padding = '1rem'
        pElement.style.margin = "0.5rem"
        pElement.style.fontSize = '2rem';
        pElement.style.display = 'flex';
        pElement.style.justifyContent = 'center';
        pElement.style.alignItems = 'center';
    }
    document.body.appendChild(division)
}



let totalNumber = document.querySelector('#total-countries')
totalNumber.textContent = `Total Number of countries : ${countries.length}`

totalNumber.style.fontSize = '2rem'
totalNumber.style.textAlign = 'center'
