// const names = ["Nina","Vlad","Artem","Olga","Liudmyla"]
// // for (let index = 0; index < names.length; index++) {
// //     console.log(names[index]);
    
// // }

// names.forEach(function(name,index,array)  {
//     console.log(index)
//     console.log(name)
//     console.log(array)
// });

// const numbers = [10,5,18,21,5,7]
// numbers.forEach(element => {
//     console.log(element**2)
// });

// const doc = document.querySelector(".div")
// const names = ["Nina","Vlad","Artem","Olga","Liudmyla"]
// names.forEach(element => {
//     // doc.insertAdjacentHTML("afterbegin",`<div>${element}</div>`)
//    doc.innerHTML += `<div>${element}</div>` 
// });

// const title = document.querySelector(`h1`)
// title.innerText += "Привет"

const title = document.querySelector(`.products`)


const products = [
    {
        name: "Milk",
        price: 500
    },
    {
        name: "Cous cus",
        price: 400
    },
    {
        name: "Butter",
        price: 700
    }
]
products.forEach(element => {
    title.innerHTML +=`
    <div>
        <h5>${element.name}</h5>    
        <p>${element.price}</p>
    </div>`
});