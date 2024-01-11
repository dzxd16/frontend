const doc = document.querySelector("header")
doc.insertAdjacentHTML("afterbegin", `<h1>Hello</h1>`)
// doc.innerText = "Hello"

// function logsum() {
//     console.log("sum")
// }

// function getSum(firstNum, secondNum) {

//     return firstNum + secondNum;

// }

// function sortArray(num1, num2, num3, num4) {
//     const array = [num1, num2, num3, num4]
//     return array.sort()

// }

// console.log(sortArray(5, 2))

// function getArray(a, b) {
//     if (a == b) {
//         return null
//     }
//     let min = a
//     let max = b
//     if (a > b) {
//         min = b
//         max = a
//     }
//     const newArray = []
//     for (let i = 0; i <= max; i++) {
//         newArray.push(i);

//     }
//     return newArray

// }

// console.log(getArray(1, 20))

// function getStatsOfArray(arr) {
//     let sum = 0
//     let min = arr[0]
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i]

//         if (arr[i] < min) {
//             min = arr[i]
//         }
//         if (arr[i] > min) {
//             max = arr[i]
//         }
        
//     }
//     let avg = sum / arr.length
//     const obj = {
//         min,
//         max,
//         avg
//     }   
//     return obj
// }


// console.table(getStatsOfArray([1,2,3,4]))
// // console.log(getStatsOfArray([1,2,3,4,5]))

// function polindrom(word) {
    

// // const word = "hello"
// let element = ``;
// for (let index = (word.length-1); index >= 0; index--) {
//     element+=word[index]
// }
// console.log(element)
//     // if (word===element) {
//     //     return true
//     // } else{
//     //     return false
//     // }
//     return word===element
// }

// console.log(polindrom("anna"))
// console.log(polindrom("sasha"))

// let sum = 0
// for (let i = 0; i <= 50 ; i+=5) {
//     sum+=i
// }

// console.log(sum)

// let list = [2,-6,15,23,true,100]
// let sum = 0
// for (let index = 0; index < list.length; index++) {
//     if(typeof list[index]==="number"){
//         sum+=list[index]
//     }
//     if (typeof list[index]==="boolean") {
//         break
//     }
// }
// console.log(sum)

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
// const products = [
//     {
//         id: 1,
//         title: "bicycle",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "roller-skates",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "kick scooter",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "skis",
//         price: 25000,
//         discount: 10
//     },
//     {
//         id: 5,
//         title: "skate",
//         price: 10000,
//         discount: 0
//     }
//   ]
  
// for(let i = 0; i < products.length ; i++){
//     const {title:name, price, discount} = products[i] 
//     console.log(`${name}: price = ${price - price*discount}`)
// }

// let arrow1 = [1,2,3,4]
// const [a,b,c,d] = arrow1


