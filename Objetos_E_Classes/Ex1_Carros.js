/*
1) Crie um classe para representar carros.
Os carros possuem um marca, uma cor e um gasto medio de combustivel por km rodado.
Crie um metodo que dado a quantidade de quilometros e o pre;o do combustivel nos de o valor gasto
em reais para realizar este percurso.
*/
class Carro{
    marca;
    cor;
    litroPorKM;

    constructor(marca, cor, litroPorKM){
        this.marca = marca;
        this.cor = cor;
        this.litroPorKM = litroPorKM;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.litroPorKM * precoCombustivel;

    }
}


const uno = new Carro('Fiat','Vermelho',1/16);
console.log('R$',(uno.calcularGastoDePercurso(70, 5)).toFixed(2));
const celta = new Carro('Chevrolet','preto',1/12);
console.log('R$',(celta.calcularGastoDePercurso(70, 5)).toFixed(2));
