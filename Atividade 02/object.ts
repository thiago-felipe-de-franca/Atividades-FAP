// Questao 1
type Pessoa = {
    nome: string,
    idade: number,
    endereco: string
}

const pessoa: Pessoa = {
    nome: "Thiago",
    idade: 25,
    endereco: "Jaboatao dos Guararapes"
}

// Questao 2
console.log(pessoa.nome)

// Questao 3
// Pessoa = {
//     profissao: string
// }

// Questao 4
pessoa.idade = 30

// Questao 5
type Animal = {
    nome: string,
    especie: string,
    cor: string
}

const animal:Animal = {
    nome: "Max",
    especie: "Cachorro",
    cor: "Preto"
}

// Questao 6
type Livro ={
    titulo?: string,
    autor: string,
    ano: number
}

const livro:Livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899
}

// Questao 7
console.log(livro.autor)

// Questao 8
livro.ano = 2024

// Questao 9
delete livro.titulo

// Questao 10
type Carro ={
    marca: string,
    modelo: string,
    ano: number
}

const carro:Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024
}

console.log(carro)

// Questao 11
carro.modelo = "undefined"
console.log(carro)