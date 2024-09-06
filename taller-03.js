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

//Punto 2
function twoSum(lista, total) {
  return []
}

//Punto 3
function conversionRomana(numRomano) {
  return 0
}
