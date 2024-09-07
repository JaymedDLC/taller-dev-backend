//Punto 1
function filterVocales(item) {
    if (["a", "e", "i", "o", "u"].includes(item)) {
        return true
    }
    return false
}

function desglosarString(palabra, opcion) {
    const lista =  palabra.split("")
    if (opcion == "vocales") {
        return lista.filter(filterVocales).length
    }
    if (opcion == "consonantes") {
        return palabra.length - lista.filter(filterVocales).length
    }
    return Error
}

console.log(desglosarString("Murcielagos", "vocales"))
console.log(desglosarString("Murcielagos", "consonantes"))
//console.log(desglosarString("Murcielagos", "vos"))

//Punto 2
function twoSum(lista, total) {
    const index1 = lista.findIndex((item1, i) =>
        lista.some((item2, j) => i !== j && item1 + item2 === total)
    )
    if (index1 !== -1) {
        const item1 = lista[index1];
        const index2 = lista.findIndex((item2, j) => j !== index1 && item1 + item2 === total);
        if (index2 !== -1) {
            return [index1, index2]
        }
    }
    return null
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3,4,2],6))
//console.log(twoSum([2, 3, 5], 10))

//Punto 3
const valoresRomanos = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function calcularValor(acumulador, actual, indice, arreglo) {
    let valorActual = valoresRomanos[actual]
    let valorSiguiente = valoresRomanos[arreglo[indice + 1]]

    return valorSiguiente && valorActual < valorSiguiente ? 
        acumulador - valorActual: 
        acumulador + valorActual
}

function conversionRomana(numRomano) {
    return numRomano.split('').reduce(calcularValor, 0)
}

console.log(conversionRomana("III"))
console.log(conversionRomana("XIV"))
console.log(conversionRomana("MMXXIV"))
console.log(conversionRomana("MCMXCVII"))
