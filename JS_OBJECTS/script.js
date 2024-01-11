// const user = {}
// const doctor = {
//     //ключ: "значение"
//     name: "Arsen",
//     prof: "Stomatolog",
//     expiriens: 20,
//     skills: ["terapevt","ortodont","implantolog"],
//     age: 45,
//     room: {
//         terapevt: ["rentgen-apparat","bor-mashina"]
//         ortodont: ["operation"]
//     },
//     schedule: {
//         monday: ["9:00","17:00],
//         thuesday: "10:00, 16:00"
//     },
// }


// console.log(doctor.name)
// console.log(schedule.monday[1])

// const product = {
//     name: "Milk",
//     price: 20,

// }

// console.log(`В магазине нужно купить ${product.name} по цене ${product.price}`)

//массив объектов

// const products = [
//     {
//         name: "milk",
//         price: 500
//     },
//     {
//         name: "butter",
//         price: 400
//     },
//     {
//         name: "rise",
//         price: 700
//     },
// ]

// let summa = 0
// for (let index = 0; index < products.length; index++) {
//     // console.log(`В магазине нужно купить ${products[index].name} по цене ${products[index].price}`)
//     // summa = summa + products[index].price
//     summa += products[index].price

// }

// console.log(`Summa ${summa} `)



// for (let index = 0; index < products.length; index++) {
//     const {name,price} = products[index]
//     if (price > 500) {
//         console.log(` name = ${name}` )
//     }
// }


// const user = {
//     name: "Arsen",
//     age: 25,
//     skills: ["html", "css", "js"]
// }

// const {name, age, skills} = user

const products = [
    {
        name: "ACER",
        model: "G500",
        price: 50000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "G200",
        price: 45000,
        category: "laptop"
    },
    {
        name: "Samsung",
        model: "T237",
        price: 60000,
        category: "TV"
    },
    {
        name: "Iphone",
        model: "15",
        price: 70000,
        category: "phone"
    },
    {
        name: "Lenovo",
        model: "T700",
        price: 65000,
        category: "TV"
    }
]

for (let index = 0; index < products.length; index++) {
    const { name, price } = products[index]
    console.log(`Name - ${name} price - ${price * 0.9}`)
}

const productsTv = []
for (let index = 0; index < products.length; index++) {
    const { name, price, model, category } = products[index]
    if (category == "TV") {
        console.log(`Name - ${name} price - ${price * 0.9} model - ${model} category - ${category}`)
        productsTv.push(products[index])
    }
}


