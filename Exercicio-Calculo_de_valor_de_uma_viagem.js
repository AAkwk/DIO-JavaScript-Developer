/* Faça um programa para calcular o valor de uma viagem.

Serão 3 variaveis:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro em Km;
3 - Distancia em Km de viagem;

*/

const precoCombustivel = 6.49;
const kmPorLitro = 10;
const distancia = 1000;

const litrosGasto = distancia/kmPorLitro;

const precoGasto = litrosGasto*precoCombustivel;

console.log('R$',precoGasto.toFixed(2));


/*console.log((distancia/kmPorLitro)*precoCombustivel,'reais');*/