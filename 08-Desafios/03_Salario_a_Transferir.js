/*
3) Faca um programa que calcule e imprima o salario a ser transferido para um
funcionario.
Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferiso e calculado da seguinte maneira:
    valor bruto salario - percentual de imposto mediante a faixa salarial + adicional dos beneficios.

Para calcular o percentual de imposto segue as aliquotas:
    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
Exemplo: Entrada:
            2000
            250

         Saida:
            2050.00         
*/
const { gets, print} = require('./funcaoAuxiliares');
const salarioBruto = gets();
const adicionalBeneficio = gets();

function calcularImpostoSalario(salarioBruto){
    if (salarioBruto > 0 && salarioBruto <= 1100){
        return salarioBruto*0.05; 
    }
    else if(salarioBruto > 1100 && salarioBruto < 2500){
        return salarioBruto*0.10;  
    }
    else if(salarioBruto > 2500){
        return salarioBruto*0.15;   
    }
}
const salario = salarioBruto - calcularImpostoSalario(salarioBruto) + adicionalBeneficio;
print(salario.toFixed(2));

