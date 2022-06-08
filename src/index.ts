let cantidad: number = 270,
  mayores: number = 0,
  menores: number = 0,
  indice: number;
let personasDisco: number[] = new Array(cantidad);
function aleatorio(mayorValor: number, menorValor: number): number {
  return Math.floor(Math.random() * (mayorValor - menorValor +1) + min);
}
for (indice = 0; indice <= cantidad; indice++) {
  personasDisco[indice] = aleatorio(40, 19);
  console.log(`${personasDisco[indice]}`);
}
console.log(`personas en total: ${cantidad}`);
for (indice = 0; indice < cantidad; indice++) {
  if (personasDisco[indice] < 21) {
    menores++;
  } else {
    mayores++;
  }
}
console.log(`mayores: ${mayores}, menores: ${menores}`);
