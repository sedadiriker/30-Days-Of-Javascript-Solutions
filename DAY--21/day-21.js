// EXERCİSES: LEVEL 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const first_paragraph = document.querySelector('p')

console.log(first_paragraph)

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id

const paragraf_1 = document.querySelector('#paragraf-1')

const paragraf_2 = document.querySelector('#paragraf-2')

const paragraf_3 = document.querySelector('#paragraf-3')

const paragraf_4 = document.querySelector('#paragraf-4')

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)

// 4. Loop through the nodeList and get the text content of each paragraph

paragraphs.forEach(content => console.log(content.textContent))

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph

paragraf_4.textContent = 'Fourth Paragraph'

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods


paragraphs.forEach((p,index) => {
    p.classList.add('p-class');
    p.id = `p${index + 1}`
})

console.log(paragraphs);

// EXERCİSES: LEVEL 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

const p = document.querySelectorAll('p')

p.forEach(tag => {
    tag.style.color = "blue";
    tag.style.backgroundColor = "black";
    tag.style.border = "2px dotted yellow";
    tag.style.fontSize = "1.5rem"
})


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

p.forEach((tag,index) => {
    if(index % 2 === 0) {
        tag.style.color = "green"
    }else {
        tag.style.color = "red"
    }
})

// 3. Set text content, id and class to each paragraph

p.forEach((tag,index) => {
    tag.classList.add('new-class-p');
    tag.id = `newId${index + 1}`;
    tag.textContent = `new ${index + 1} paragraf`
})

console.log(p);







