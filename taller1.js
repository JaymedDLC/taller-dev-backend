// Taller 1 - Backeend

function convertidorTemp (temp) {
	return temp * 9 / 5 + 35;
}

function resolvedor(a, b, c, signo) {
	if (signo)  {
  	return (-b + (b**2 - 4*a*c)**(1/2)) / (2*a);
  } else {
  	return (-b - (b**2 - 4*a*c)**(1/2)) / (2*a);
  }
}

function mejorParidad (x) {
  	return !(x%2); 
}


//Punto 1
//console.log(convertidorTemp(10));

//Punto 2
//console.log(resolvedor(1,5,4,1));
//console.log(resolvedor(1,5,4,0));

//Punto 3
//console.log(mejorParidad(4));
