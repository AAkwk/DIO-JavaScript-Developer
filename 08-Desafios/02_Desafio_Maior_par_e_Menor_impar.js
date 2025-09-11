/*
2) Faca um programa que recebe N (quantidade de numeros) e seus respectivos valores.
Imprima o mairo numero par e o menor numero impar.

Exemplo: Entrada:
            5
            3
            4
            1
            10
            8

         Saida:
            Maior numero par: 10
            Menor numero par: 1

*/

const { gets, print} = require('./funcaoAuxiliares');
const N = gets();
const numeros = [];

let maiorPar= 0;
let menorImpar = 1;

for (let i = 0; i < N; i++) {
    const numero = gets();
    if (numero%2 == 0){
        if (numero > maiorPar){
            maiorPar = numero
        }
    }
    else{
        if (numero < menorImpar){
            menorImpar = numero
        }
    }
}
print("Maior numero par: " + maiorPar);
print("Menor numero impar: " + menorImpar);