/*
2) Elabore um algoritmo utilizando funcoes, que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e a escolha de condicao de pagamento.
 Utilize os codigos da tabela a seguir para ler qual a codicao de pagamento escolhida e efetuar o calculo adequado.

 Codigo condicao de pagamento:
1 - A vista Debito, recebe 10% de desconto;
2 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em um ou duas vezes, preco normal de etiqueta semjuros;
4 - Acima de duas vezes, preco normal de etiqueta mais juros de 10%;

 */
function aplicarDesconto(precoProduto, porcentagem){
    return (precoProduto - (precoProduto * porcentagem/100));
}
function aplicarJuros(precoProduto, porcentagem){
    return (precoProduto + (precoProduto * porcentagem/100));
}
function main(){

    const precoProduto = 41.5;/*Preco de Etiqueta */
    const condicaoPagamento = 3;/*Condicao de pagamento */
    const creditoNumeroVezes = 2;/*Numero de parcelamento */


    if (condicaoPagamento === 1) {
        console.log('Preco com desconto e R$', (aplicarDesconto(precoProduto, 10)).toFixed(2));
    }
    else if(condicaoPagamento === 2 ){
        console.log('Preco com desconto e R$', (aplicarDesconto(precoProduto, 15)).toFixed(2));
    }
    else{
        if(creditoNumeroVezes <= 2){
            const valorParcela = precoProduto/creditoNumeroVezes;
            console.log('Preco de pagamento e R$',precoProduto.toFixed(2),', dividido em ',creditoNumeroVezes.toFixed(0),` vez(es), com parcela no valor de R$`,valorParcela.toFixed(2),'.');
        }
        else{   
            const precoFinal = aplicarJuros(precoProduto, 10);
            const valorParcela = precoFinal/creditoNumeroVezes;
            console.log('Preco de pagamento e R$',precoFinal.toFixed(2),', dividido em ',creditoNumeroVezes.toFixed(0),` vezes, com parcela no valor de R$`,valorParcela.toFixed(2),'.');
        }
    }
}
 main();