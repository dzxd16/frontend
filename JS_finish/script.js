// обработка форм
// 1. Приотправке формы в консоли отобразить отпралено
// 2. Приотправке формы в консоли отобразить данные из полей


const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector("product-price")

const product = [
    {
        name:"Велосипед",
        price:40000
    },
    {
        name:"Самокат",
        prce:15000
    }
]

form.addEventListener("submit", function(event) {
    event.preventDefault()// отменяет перезагрузку при отправке формы
    console.log("Отправлено")
    console.log(event.target)
    console.log(productName.value)
    // console.log(productPrice.value)
    const newProduct = {
        name: productName.value,
        price: productPrice.value
    }
    
})
/*
submit - событие которое происходит при отправке формы

*/ 