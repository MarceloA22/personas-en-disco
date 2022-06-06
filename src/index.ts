let cantidad: number = 270,
  mayores: number = 0,
  menores: number = 0,
  indice: number;
let personasDisco: number[] = new Array(cantidad);
function aleatorio(mayorValor: number, menorValor: number): number {
  return Math.floor(Math.random() * mayorValor || menorValor);
}
for (indice = 0; indice <= cantidad; indice++) {
  personasDisco[indice] = aleatorio(40, 19);
  console.log(`${personasDisco[indice]}`);
}
console.log(`personas en total: ${indice - 1}`);
for (indice = 0; indice <= cantidad; indice++) {
  if (personasDisco[indice] < 21) {
    mayores++;
  } else {
    menores++;
  }
}
console.log(`mayores: ${mayores - 1}, menores: ${menores}`);
