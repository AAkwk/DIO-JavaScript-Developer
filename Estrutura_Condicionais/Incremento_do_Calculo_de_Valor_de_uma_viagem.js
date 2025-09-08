/* Faça um programa para calcular o valor de uma viagem.

Serão 5 variaveis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que esta no seu carro;
2 - Gasto médio de combustivel do carro em Km;
3 - Distancia em Km de viagem;

*/
const precoEtanol = 4.49;
const precoGasolina = 6.49;
const kmPorLitro = 10;
const distancia = 1000;
const tipoCombustivel = 'Gasolina';

const litrosGasto = distancia / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const precoGasto = litrosGasto * precoEtanol;
    console.log('R$', precoGasto.toFixed(2));
}
else{
    const precoGasto = litrosGasto * precoGasolina;
    console.log('R$', precoGasto.toFixed(2));
}





/*console.log((distancia/kmPorLitro)*precoCombustivel,'reais');*/