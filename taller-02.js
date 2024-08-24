let listaNum = [1,5,3,7,3,98,4]

//Punto 1
function findMax (values) {
    let mayor = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > mayor) {
            mayor = values[i];
        }
    }
    return mayor;
}



// Punto 2
function includes (values, val) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] == val) {
            return true;
        }
    }
    return false;
}


//Punto 3
function sum(values) {
    let x = 0;
    for (let i = 0; i < values.length; i++) {
        x += values[i];
    }
    return x;
}


//Punto 4
function missingNumbers(values) {
    let min = Math.min.apply(Math, values);
    let max = Math.max.apply(Math, values);
    let x = [];    
    for (let i = min; i <= max; i++) {        
        if (!(includes(values, i))) {
            x.push(i);
        }
    }
    return x;
}

console.log(missingNumbers([7,2,4,6,3,9]));
//console.log(missingNumbers(listaNum));