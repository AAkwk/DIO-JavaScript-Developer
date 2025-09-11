/*
1) Faca um programa que receba a media de um aluno.
Caso a media seja < 5, imprima "Reprovado"
Caso a media seja >= 5 e < 7, imprima "Recuperacao"
Caso a media seja > 7, imprima "Aprovado"
*/ 
const { gets, print} = require('./funcaoAuxiliares');

const media = gets();

if (media >= 0 && media < 5) {
    print('Reprovado!');
}
else if(media >= 5 && media < 7){
     print('Aprovado!');
}
else if(media >= 7){
     print('Aprovado!');
}
else{
    print('Numero Invalido');
}
