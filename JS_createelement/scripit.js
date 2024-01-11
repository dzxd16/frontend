// //Создание элемента в DOM

// // const title = document.createElement("h1")
// // const header = document.querySelector("header")
// // header.append(title)
// // title.innerText = "Hello"

// const item = document.querySelector(".item")
// const p = document.createElement("p")
// p.innerText = "Hello world"
// item.append(p)

// item.insertAdjacentHTML("beforeend","<div> <p>Hello gueys</p> <a>Hello gueys</a> </div>  ")

// item.insertAdjacentHTML("beforeend","<p>Hello gueys</p>   ")
// // item.insertAdjacentHTML("beforeend","
// // <>
// // ")
// for (let index = 0; index < 19; index++) {
//     // item.insertAdjacentHTML("beforeend",("<p>"+index+"</p>"))
//     item.insertAdjacentHTML("beforeend",(`<p>${index}</p>`))
        
// }

// const names = ["Arsen","Artem","Vlad","Alina","Iren"]
// for (let index = 0; index < names.length; index++) {
//     item.insertAdjacentHTML("beforeend",`<p>${names[index]}</p>`)
    
// }

// for(let i = 0; i < names.length; i++){
//     const p = document.createElement("p")
//     p.innerText = names[i]
//     item.append(p)
// }

// const header =  document.querySelector("header")
// const text = "Hello world"
// header.insertAdjacentHTML("afterbegin",`<h1>${text}</h1>`)

const products = [
    {name: "Milk",
    price: 500
    },
    {
        name: "Grechka",
        price: 600

    },
    {
        name: "Ketchup",
        price: 900
    }

]

const item1 = document.querySelector(".item")


for (let index = 0; index < products.length; index++) {
    item1.insertAdjacentHTML("afterbegin",`
    <div class = "product">
        <h5> 
            ${products[index].name}  
        </h5>
        <p>
            - ${products[index].price} USD
        </p>
    </div>`)
    
}

