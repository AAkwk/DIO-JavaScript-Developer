/*
Faça um algoritmo que dadi as 3 notas tiradas por um aluno em um semestre de faculdade, calcule e imprima a sua média 
e sua classsificaçao conforme a tabela

Media = (nota1 + nota2 + nota3)/3;

Classificação:
- Media menor que 5, reprovado;
- Media entre 5 e 7, recuperação;
- Media acima de 7, passou de semestre;

*/
const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const media = (nota1 + nota2 + nota3)/3;

if (media < 5) {
    console.log('Reprovado!');
}
else if(media >= 7){
     console.log('Aprovado!');
}
else{
    console.log('Recuperação');
}
