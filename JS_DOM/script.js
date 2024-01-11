/*
    DOM - дерево - представление HTML тегов в виде объектов
*/

// Навигация html с помощью js
/*
    document.querySelector()
*/ 

// const title = document.querySelector(".my-title")
// console.log(title)
// console.log(title.innerText)
// const oldMyTitle = title.innerText
// title.innerText = "This my header"
// const titles = document.querySelectorAll("h1")
// console.log(titles)
// for (let index = 0; index < titles.length; index++) {
//     const element = titles[index];
//     element.innerText = "This my title"
// }
// const title = document.querySelector("p")
// title.innerText = "Привет"
const titles = document.querySelectorAll("p")
for (let index = 0; index < titles.length; index++) {
    const element = titles[index];
    element.innerText = "Привет"
}
document.querySelector(".item p").innerText = "Hello"
// item.innerText

const img = document.querySelector("img")
const sourse = img.getAttribute("src")
console.log(sourse)
img.setAttribute("src","../Project6/images/image 2.png")