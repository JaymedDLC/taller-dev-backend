// 1:

const listaDeStrings = [
    "MoonlightJelly",
    "NebulaVortex",
    "EchoWhisper",
    "CrimsonTide",
    "TheStarryNightBeneathSilverWaves",
    "SilverFrost",
    "WhispersOfTheAncientWindsEchoing",
    "ZebraFlare",
    "ThroughTheValleyOfEndlessTwilight",
    "Firestone",
    "ShadowLeaf",
    "TheGoldenFrostCrestsOfTheNorthernSeas",
    "LunarHaze",
    "TheTaleOfTheHiddenForestInTheMist",
    "WildSky",
    "BeneathTheCelestialVeilOfNight"
];

function contador(x) {
  let stringsLargos = 0;
  for	(let i = 0; i < x.length; i++) {

    if (x[i].length >= 25) {
      stringsLargos+= 1;
    }
  }
  return stringsLargos;
}

console.log(contador(listaDeStrings));


// 2:
function potencia(x,y) {
  let i = 0;
  let j = 1;
  while (i < y) {
  	j *= x;
    i += 1;
  }
  return j;
}

console.log(potencia(2,8));

// 3:
const listaDeNumeros = [
    6, 4, 5, 8, 6, 9, 8, 4, 
    8, 12, 6, 4, 8, 8, 6, 15, 
    23, 1, 8, 42, 4, 6, 7, 29, 
    2, 3, 18, 8
];

function contarOcurrencias(x, y) {
	ocurrencias = 0; 
  for (let i = 0; i < x.length; i++) {
  	if(x[i] == y) {
    	ocurrencias += 1;
    }
  }
  return ocurrencias;
}

console.log(contarOcurrencias(listaDeNumeros,8));


// 4: 

function fibo(x) {
	if (x == 0 || x == 1){
  	return 1;
  } else {
  	return fibo(x-1) + fibo (x-2);
  }
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));


// 5: 

function tieneDuplicados(x) {
  let vistos = new Set();
  for (let i = 0; i < x.length; i++) {
    if (vistos.has(x[i])) {
      return true;
    } 
    vistos.add(x[i]);
  }
  return false;
}

console.log(tieneDuplicados(listaDeNumeros));
console.log(tieneDuplicados(listaDeStrings));
