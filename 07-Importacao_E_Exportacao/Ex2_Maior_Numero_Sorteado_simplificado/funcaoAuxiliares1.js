const entradas = [10, 5, 50, 10, 98, 23, 52, 58, 100, 92, 67];
let i = 0;


function gets(){
    valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto){
    console.log(texto);

}

module.exports ={gets, print};