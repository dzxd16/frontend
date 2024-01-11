// const posts = [
//     {
//         title: "My first title",
//         descr: "My first descr",
//         likes: 100
//     },
//     {
//         title: "My second title",
//         descr: "My second descr",
//         likes: 50
//     }, 
//     {
//         title: "My third title",
//         descr: "My third descr",
//         likes: 120
//     }
// ]

// posts.forEach(element => {
//     if (element.likes>70) {
//         console.log(`Заголовок: ${element.title}, Описание:${element.descr}`)    
//     }
    
// });

// // addEventListener("")
const item = document.querySelector(".item")

function GetRandomNumber() {
    const randomNumber = Math.floor(Math.random()*256)
    return randomNumber
}
item.addEventListener("click",function () {
    console.log("Hello")
    console.log(item.style.backgroundColor)
    item.style.backgroundColor = `rgb(${GetRandomNumber()},${GetRandomNumber()},${GetRandomNumber()})`;
})


item.addEventListener("mouseover",function () {
    item.classList.add("mouseover")
    // item.classList.remove("mouseover")
})

item.addEventListener("mouseout",function () {
    item.classList.remove("mouseover")
    // item.classList.add("mouseover")
})

const submit = document.querySelector("form")
const userName = document.querySelector("user-name")
const userAdress = document.querySelector("user-address")
const userAge = document.querySelector("user-age")
submit.addEventListener("submit",function (event) {
    
    event.preventDefault()
    console.log(event)
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)

    
    // console.log(event.target(user-name)
    console.log(userName.value)
    console.log(userAdress.value)
    console.log(userAge.value)
    
})





