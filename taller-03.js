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
function conversionRomana(numRomano) {
  return 0
}
