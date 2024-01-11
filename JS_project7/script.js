const cart = document.querySelector(".item-1")
const carts = document.querySelectorAll(".item-1 p")
// console.log(carts)
cart.addEventListener("click",function (event) {
    carts.forEach(element => {
        element.classList.toggle("hidden")
    });
        
    
})

const lengs = ["en","ru","es","de"]

const body = document.querySelector("body")
let listlengsTeg = `<div class = " buttons ">`
lengs.forEach(element => {
    listlengsTeg += `<button class = "leng noacctive">${element}</button>`
});
listlengsTeg += `</ " buttons ">`
body.insertAdjacentHTML("afterbegin",listlengsTeg)
console.log(listlengsTeg)  

// body.insertAdjacentHTML("afterbegin",`<div class = " buttons ">
    
//     <button class = "leng noacctive">en</button>
//     <button class = "leng acctive">ru</button>
//     <button class = "leng acctive">es</button>
//     <button class = "leng acctive">de</button>
// </>`)

const buttons = document.querySelectorAll(".leng")
const texts = document.querySelectorAll(".text")
buttons.forEach(element => {
    element.addEventListener("click", function (event) {
        texts.forEach(element1 => {
            nameclass = element.textContent
            console.log(nameclass)
            console.log(element1.classList.contains(nameclass))
            
            if (element1.classList.contains(nameclass)) {
                element1.classList.remove("hidden")
            } else {
                element1.classList.add("hidden")
            }
            console.log(element1)
        });
        buttons.forEach(element1 => {
            // console.log(element)
            // console.log(element1)
            if (element == element1) {
                element1.classList.add("acctive")
                element1.classList.remove("noacctive")
            } else {
                element1.classList.remove("acctive")
                element1.classList.add("noacctive")
            }
        })
    })
    
});

