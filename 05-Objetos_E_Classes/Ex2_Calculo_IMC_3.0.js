/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC;
Instancie uma pessoa chama Jose que tenha 70kg de peso  e 1.75 de altura e peca ao Jose dizer o valor do seu IMC.
*/



class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return (this.peso)/Math.pow(this.altura, 2);
    }
    classificarIMC(){
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Voce esta abaixo do peso.');
        }
        else if(imc > 18.5 && imc < 25){
            return ('Voce esta com peso normal.');
        }
        else if(imc > 25 && imc < 30){
            return ('Voce esta acima do peso.');
        }
        else if(imc > 30 && imc < 40){
            return ('Voce esta Obeso.');
        }
        else{
            return ('Voce esta com Obesidade grave');
        }
    }
}
const jose = new Pessoa('Jose', 70, 1.75)
console.log('O resultado do calculo do IMC e',(jose.calcularIMC()).toFixed(2));
console.log(jose.classificarIMC());
const alexandre = new Pessoa('Alexandre', 98, 1.77)
console.log('O resultado do calculo do IMC e',(alexandre.calcularIMC()).toFixed(2));
console.log(alexandre.classificarIMC());