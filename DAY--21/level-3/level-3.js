
// The year color is changing every 1 second

const year = document.querySelector('span')

console.log(year)

function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let color = `rgb(${red},${green},${blue})`

    return color
}

setInterval(function() {
    year.style.color = randomColor()
}, 1000)



// The date and time background color is changing every on seconds

function date() {
    
    const currentDate = new Date()
    const monthsName = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]
    let hours = currentDate.getHours()
        if (hours < 10) {
            hours = '0' + hours
        }
    let minute = currentDate.getMinutes()
        if (minute < 10) {
            minute = '0' + minute
        }
    let seconds = currentDate.getSeconds()
        if(seconds < 10) {
            seconds = '0' + seconds
        }

    let formattedDate = `${monthsName[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()} ${hours}:${minute}:${seconds}`

    const p = document.querySelector('p')
    p.textContent = formattedDate
    p.style.backgroundColor = randomColor()
}


setInterval(date,1000)

// Completed challenge has background green

const list_li = document.querySelectorAll('li')

list_li[0].style.backgroundColor = 'green'

// Ongoing challenge has background yellow

list_li[1].style.backgroundColor = 'yellow'

// Coming challenges have background red

for(const element of list_li) {
    if(element == list_li[0] || element == list_li[1]) {
        continue
    };
    element.style.backgroundColor = 'red'
}

