
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }
    descrever(){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}.`);
    }

}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} e mais velho(a) que ${p2.nome}.`);
    }else if (p1.idade < p2.idade){
        console.log(`${p2.nome} e mais velho(a) que ${p1.nome}.`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}
const Alexandre = new Pessoa('Alexandre Augusto Kawakita de Souza', 30);
const Maria = new Pessoa('Maria Gabriela', 22);

compararPessoas(Alexandre, Maria);