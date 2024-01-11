// function name(params) {
    
// }

function sum(a,b){
    return a+b
}

// console.log(sum(2,3))

function greeting(name) {
    console.log(name)
}

greeting("Hi Arsen")

function calcDiscount(price,sale) {
    return price*(100-sale)/100
}

// greeting(calcDiscount(100,1))
// greeting(calcDiscount(100,25))

// function square() {
//     const number = +prompt("Enter number")
//     const squere =  number ** 2
//     console.log(squere)
//     // Math.pow(число,степень)
// }

// // square()

// function fnMax(par1,par2) {

//     console.log(Math.max(par1,par2))
// }

// fnMax(10,15)
function showNotification(text,color) {
    console.log(`<div style="background-color: ${color};">${text}</div>`)
}

showNotification('Hello, gues', 'green')



