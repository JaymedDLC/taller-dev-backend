// Taller 1 - Backeend


//Punto 1
console.log("Punto 1:")

function convertidorTemp (temp) {
	return temp * 9 / 5 + 32;
}
console.log(convertidorTemp(-40)); // -40 es el punto donde ambas temperaturas se encuentran


//Punto 2
console.log("Punto 2:")

function resolvedor(a, b, c, signo) {
	if (signo)  {
  	return (-b + (b**2 - 4*a*c)**(1/2)) / (2*a);
  } else {
  	return (-b - (b**2 - 4*a*c)**(1/2)) / (2*a);
  }
}
console.log(resolvedor(1,5,4,1)); // 1 para '+' y 0 para '-' 
console.log(resolvedor(1,5,4,0));


//Punto 3
console.log("Punto 3:")

function mejorParidad (x) {
  	return !(x%2); 
}
console.log(mejorParidad(4));


//Punto 4
console.log("Punto 4:")

function peorParidad(x) {
    let alternador = true;
    let par = 0;
    let impar = 0;

    for (let i = 1; i <= x; i++) {
        if (alternador) {
            impar += 1;
            alternador = false;
        } else {
            par += 1;
            alternador = true;
        }
    }

    if (impar > par) {
        return false;
    } else {
        return true;
    }
}
console.log(peorParidad(794334066));
