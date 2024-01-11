// for (let index = 0; 6 ; index++) {
//     if(index%2==0) console.log(index + " четное");
//     else console.log(index + "не четное");
// }

// function maxElement(array) {
//     let rez = array[0];
//     array.forEach(element => {
//         if (rez<element) rez = element;
//     });
//     return rez;
// }


// function minElement(array) {
//     let rez = array[0];
//     array.forEach(element => {
//         if (rez>element) rez = element;
//     });
//     return rez;
// }

// console.log(maxElement([1,2,3,4,5]));
// console.log(minElement([1,2,3,4,5]));

// let array = [0,10,20,30,40,50]
// for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[index];
//         if (index+j==50) console.log("i="+array[index] + " j=" +array[j]);
//     }
     
// }

function duble(array,par1) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            const element = array[index];
            if (index+j==par1) console.log("i="+array[index] + " j=" +array[j]);
        }
         
    }  
}

duble([10,20,20,30,40,15,25,35,5,45],50);
