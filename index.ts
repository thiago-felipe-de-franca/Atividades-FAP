class Pessoa {
    nome: string;
    idade: number;
    sexo: string;

    constructor(nome: string, idade: number, sexo: string) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

const pessoa1 = new Pessoa("Thiago", 25, "M");
const pessoa2 = new Pessoa("Maria", 23, "F");
const pessoa3 = new Pessoa("João", 14, "M");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
