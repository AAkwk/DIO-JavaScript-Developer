/* 
1) O IMC - Indice de Massa Coporal e um criterio da Organizacao Mundial de Saude para dar um indicacao sobre
a condicao de peso de uma pesssoa adulta.
 
Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo utilizando funcoes, que dado o peso e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo:


IMC em adultos Condicoes:
-Abaixo de 18.5, Abaixo do peso;
-Entre 18.5 e 25, Peso normal;
-Entre 25 e 30, Acima do peso;
-Entre 30 e 40, Obeso;
-Acima de 40, Obesidade Grave;

*/

function calcularIMC(peso, altura){
    return (peso)/Math.pow(altura, 2);
}
function classificarIMC(imc){
    if (imc < 18.5) {
     return 'Voce esta abaixo do peso.';
}
else if(imc > 18.5 && imc < 25){
     return 'Voce esta com peso normal.';
}
else if(imc > 25 && imc < 30){
     return 'Voce esta acima do peso.';
}
else if(imc > 30 && imc < 40){
     return 'Voce esta Obeso.';
}
else{
     return 'Voce esta com Obesidade grave';
}
}

function main(){
    const peso = 41.5;
    const altura = 1.42;
    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
}

main();