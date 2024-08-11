// Questao 1
const numeros:number[] = []

// Questao 2
numeros.push(1, 2, 3, 4)

// Questao 3
console.log(numeros[1])

// Questao 4
numeros[2] = 10
console.log(numeros[2])

// Questao 5
numeros.pop()
console.log(numeros)
// Questao 6
console.log(numeros.length)

// Questao 7
const frutas:string[] = ["maca", 'banana', 'laranja']

// Questao 8
console.log(frutas[0])

// Questao 9
frutas.push('uva')

// Questao 10
type Aluno = {
    nome: string,
    idade: number
}

const thiago:Aluno ={
    nome:'Thiago',
    idade: 25
}

const alunos:Aluno[] = [thiago]
console.log(alunos)

// Questao 11
console.log(alunos[0].idade)

// Questao 12
const joao:Aluno = {
    nome: 'Joao',
    idade: 45
}

const antonio:Aluno = {
    nome: "Antonio",
    idade: 59
}

alunos.push(joao, antonio)
console.log(alunos)

// Questao 13
const produtos:string[] = [
    "sabao",
    'carne',
    "arroz",
    'feijao',
    'frango',
    'ovos',
    'batata',
    'cebola',
    'tomate',
    'cenoura'
]

console.log(produtos[1], produtos[3], produtos[5], produtos[7], produtos[9])