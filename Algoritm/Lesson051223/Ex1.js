let array = [50,40,30,20,10];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
        if (array[j]>array[j+1]) {
            let prom = array[j];
            array[j] = array[j+1];
            array[j+1] = prom;
        }
    }    
}
console.log(array);