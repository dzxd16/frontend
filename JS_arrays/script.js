// const arr = [] // пустой массив
// const namesboy = ["Arsen", "Vlad"]
// const namegirl = ["Anna", "Maria"]
// const allname = [namegirl, namesboy]

// console.log(allname)
// console.log((allname[1])[0])
// console.log(namegirl)

// namegirl.push("Mirabella",2)

// const names = ["Arsen", "Vlad", "Olga", "Irina","Dmitrii","Artem"]

// for(let i= 0; i<names.length;i++){
//     console.log(`Привет, ${names[i]}`)
//     // console.log('Привет, ' + names[i])
// }

// const numbers = [-100, 0, 50, -20, 0, 15, 25, -40]

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] > 0) {
//         console.log(numbers[index])
//     }

// }

// const numbers = [10,17,11,21,40,501,50,46]

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index]%2 == 0) {
//         console.log(numbers[index])
//     }

// }
const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
let summa1 = 0
let summa2 = 0
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        summa1 = summa1 + numbers[index]

    } else {
        summa2 = summa2 + numbers[index]
    }
}

const rez = summa1 - summa2
if (rez > 0) {

    console.log(`rez = ${rez}`)
} else {

    console.log(`rez = ${-rez}`)
}

