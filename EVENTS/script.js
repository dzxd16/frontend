//События

/*
    
*/ 
// При клике на кнопку - функция
let number = 0
const button = document.querySelector(".btn")
const main = document.querySelector("main")
main.insertAdjacentHTML("afterbegin",`<div class = "div">${number}</>`)
main.insertAdjacentHTML("afterbegin",`<button class="btn1">Click - </button>`)
const button1 = document.querySelector(".btn1")

// main.insertAdjacentHTML("beforeend",`<div class = "div"> Hello </>`)
const item = document.querySelector(".item") 
const buttons = document.querySelectorAll("button")
for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener("click", function(event) {
        // console.log("на меня кликнули")
        item.style.backgroundColor = event.target.className
        console.log(event)
        console.log(event.target)
        
    })
    element.addEventListener("mouseover", function () {
        element.style.backgroundColor = element.className
    })

    element.addEventListener("mouseout", function () {
        element.style.backgroundColor = "white"
    })
}



div = document.querySelector("div")
button.addEventListener("click", function() {
    // console.log("на меня кликнули")
    ++number
    console.clear()
    console.log(number) 
    div.innerText = number

})

button1.addEventListener("click", function() {
    // console.log("на меня кликнули")
    --number
    console.clear()
    console.log(number) 
    div.innerText = number

})

console.log(item.style.backgroundColor)
item.addEventListener("mouseover",function()  {
    item.style.backgroundColor = "red"
    console.log(item.style.backgroundColor)
})

item.addEventListener("mouseout",function()  {
    item.style.backgroundColor = "blue"
    console.log(item.style.backgroundColor)
})

// item.addEventListener("mousemove",function()  {
//     item.style.backgroundColor = "white"
//     console.log(item.style.backgroundColor)
// })

// button.addEventListener("mouseover",function name(params) {


    
// })
// button.addEventListener("mouseout")
// button.addEventListener("mousemove")
