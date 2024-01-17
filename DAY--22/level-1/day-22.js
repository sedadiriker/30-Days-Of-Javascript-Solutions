
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


const numbers = [];

for (let i = 0; i <= 101; i++) {
    numbers.push(i);
}



for (let i = 0; i < numbers.length; i += 6) {
    const divElement = document.createElement('div');
    divElement.style.display = 'flex';
    divElement.style.justifyContent = 'center';
    divElement.style.border = '1px solid red'

    for (let j = 0; j < 6 && i + j < numbers.length; j++) {
        const pElement = document.createElement('p');
        pElement.textContent = numbers[i + j];
        pElement.style.width = '7rem';
        pElement.style.height = '5rem';
        pElement.style.fontSize = '2rem';
        pElement.style.marginLeft = '1px';
        pElement.style.display = 'flex';
        pElement.style.justifyContent = 'center';
        pElement.style.alignItems = 'center';

        if (isPrime(numbers[i + j])) {
            pElement.style.backgroundColor = 'red';
        }else if (numbers[i + j] % 2 === 0) {
            pElement.style.backgroundColor = 'green';
        }else{
            pElement.style.backgroundColor = 'yellow'
        }
        divElement.appendChild(pElement);
    }

    document.body.appendChild(divElement);
}
