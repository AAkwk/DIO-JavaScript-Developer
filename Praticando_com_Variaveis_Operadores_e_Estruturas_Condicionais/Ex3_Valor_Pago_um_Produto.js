/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preco normal de etiqueta
e a escolha de condicao de pagamento.
 Utilize os codigos da tabela a seguir para ler qual a codicao de pagamento escolhida e efetuar o calculo adequado.

 Codigo condicao de pagamento:
 - A vista Debito, recebe 10% de desconto;
 - A vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em um ou duas vezes, preco normal de etiqueta semjuros;
 - Acima de duas vezes, preco normal de etiqueta mais juros de 10%;

 */
const precoProduto = 41.5;/*Preco de Etiqueta */
const condicaoPagamento = 'Credito';/*Condicao de pagamento */
const creditoNumeroVezes = 5;/*Numero de parcelamento */


if (condicaoPagamento === 'Debito') {
    const desconto = precoProduto*0.10;
    const precoFinal = precoProduto-(desconto);
    console.log('Preco de pagamento e R$',precoFinal.toFixed(2),', o deconto foi de R$',desconto.toFixed(2),`.`);
}
else if(condicaoPagamento === 'Dinheiro' || condicaoPagamento === 'PIX'){
    const desconto = precoProduto*0.15;
    const precoFinal = precoProduto-(desconto);
    console.log('Preco de pagamento e R$',precoFinal.toFixed(2),', o deconto foi de R$',desconto.toFixed(2),`.`);
}
else{
    if(creditoNumeroVezes <= 2){
        const precoFinal = precoProduto;
        const valorParcela = precoProduto/creditoNumeroVezes;
        console.log('Preco de pagamento e R$',precoFinal.toFixed(2),', dividido em ',creditoNumeroVezes.toFixed(0),` vez(es), com parcela no valor de R$`,valorParcela.toFixed(2),'.');
    }
    else{
        const juros = precoProduto*0.15;
        const precoFinal = precoProduto+juros;
        const valorParcela = precoFinal/creditoNumeroVezes;
        console.log('Preco de pagamento e R$',precoFinal.toFixed(2),', dividido em ',creditoNumeroVezes.toFixed(0),` vezes, com parcela no valor de R$`,valorParcela.toFixed(2),'.');
    }
}