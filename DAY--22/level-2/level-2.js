import {countries} from "./countries.js"

const div = document.createElement('div')

for(let i = 0; i < 6; i++) {
    const span = document.createElement('span')

    document.body.appendChild(div)
    div.appendChild(span)
    span.textContent = 'yazı'+ i
    span.style.border = '1px solid black'
    span.style.width = '4rem'
    span.style.height = '4rem'
    span.style.marginLeft = '2px'  
    span.style.fontSize = '2rem'
}

div.style.border = '1px solid red'
div.style.textAlign = 'center'
div.style.height = '4rem' 


