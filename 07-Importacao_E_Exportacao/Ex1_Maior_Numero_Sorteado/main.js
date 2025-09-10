/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1- 100.
Faca um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entradas:
5
50
10
98
23

Saida:
98
*/
const { gets, print} = require('./funcaoAuxiliares');
const numeros = [];
for (let i = 0; i < 5; i++) {
    const numero = gets();
    numeros.push(numero);
    
}
let maiorValor = 0;

for (let i = 0; i < numeros.length; i++) {
    const numeroSorteado = numeros[i];
    if (numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);