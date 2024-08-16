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
  return stringsLargos
}

console.log(contador(listaDeStrings))
