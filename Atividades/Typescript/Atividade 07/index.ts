// Exercicio 01
// console.log(`Estudar e muito bom!`)
// console.log(`Paciencia e persistencia!`)
// console.log(`Revisao e a mae do aprendizzado!`)

// console.log(`Estudar e muito bom!`)
// console.log(`Paciencia e persistencia!`)
// console.log(`Revisao e a mae do aprendizzado!`)

// console.log(`Estudar e muito bom!`)
// console.log(`Paciencia e persistencia!`)
// console.log(`Revisao e a mae do aprendizzado!`)

// Exercicio 02
// function criarFrases() {
//     console.log(`Estudar e muito bom!`)
//     console.log(`Paciencia e persistencia!`)
//     console.log(`Revisao e a mae do aprendizzado!`)
// }
// criarFrases()
// criarFrases()
// criarFrases()

// Exercicio 03
// function soma(num1: number, num2: number) {
//     console.log(num1 + num2)
// }

// soma(10, 15)
// soma(10, 20)
// soma(30, 50)
// soma(50, 50)

// Exercicio 04
// function soma(num1: number, num2: number) {
//     return num1 + num2
// }

// let teste1: number = soma(10, 15)
// console.log(teste1)

// let teste2: number = soma(10, 20) + soma(30, 50)
// console.log(teste2)

// console.log(soma(50,50))

// Exercicio 05
// function soma(a, b) {
//     return a + b
// }

// Exercicio 06
// function isPar(num: number) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// Exercicio 07
// function media(a: number,b: number, c: number) {
//     let resultado = (a + b + c) / 3
//     return resultado
// }

// Exercicio 08
// function imc(peso: number, altura: number) {
//     let resultado = peso / altura ** 2
//     return resultado
// }

// Exercicio 09
// function calcularDesconto(valor: number, desconto: number) {
//     let resultado:number =  valor * (1 - desconto)
//     return resultado
// }

// Exercicio 10
// function calcularImpostoRenda(salario: number) {
//     let resultado: string
//     if (salario <= 1903.98) {
//         resultado = "isento"
//     } else if (1903.99 <= salario && salario <= 2826.65 ) {
//         resultado = String(salario * 0.075)
//         return resultado

//     } else if (2826.66 <= salario && salario <= 3751.05 ) {
//         resultado = String(salario * 0.15)
//         return resultado

//     } else if (3751.06 <= salario && salario <= 4664.68 ) {
//         resultado = String(salario * 0.225)
//         return resultado
//     } else if (salario > 4664.68) {
//         resultado = String(salario * 0.275)
//         return resultado
//     }
// }

// Exercicio 11
// let listaAlunos: number[] = [7, 9.3, 8.5, 9]

// function calcularMediaAlunos() {
//     let soma: number = 0
//     for (let index = 0; index < listaAlunos.length; index++) {
//         soma += listaAlunos[index]
//     }
//     let media = soma / listaAlunos.length
//     return Math.round(media)
// }

// Exercicio 12
// function contarNumerosParesImpares(num: number) {
//     let numString = String(num).split(``)
//     let pares: number = 0
//     let impares: number = 0
//     for (let index = 0; index < numString.length; index++) {
//         if (Number(numString[index]) % 2 == 0)
//             pares ++
//         else if (Number(numString[index]) % 2 == 1) {
//             impares ++
//         }
//     }
//     return console.log(`O numero ${num} possui ${pares} algarismos pares e ${impares} algarismos impares!`)
// }

// Exercicio 13
// type Aluno = {
//     nome: string,
//     nota: number
// }

// let listaAlunos: Aluno[] = [
//     {nome: 'Thiago', nota: 10},
//     {nome: 'Pedro', nota: 9},
//     {nome: 'Joao', nota: 8},
//     {nome: 'Matheus', nota: 7},
//     {nome: 'Rodrigo', nota: 6}
// ]

// function calcularMediaAlunos(arraylist: Aluno[]) {
//     let soma = 0
//     let media = 0
//     for (let index = 0; index < listaAlunos.length; index++) {
//         soma += listaAlunos[index].nota
        
//     }

//     media = soma / listaAlunos.length
//     return console.log(media)
// }

// calcularMediaAlunos(listaAlunos)

// // Exercicio 14
// function calcularIdade(nascimento: number) {
//     let idade = 2024 - nascimento
//     return idade
// }

// Exercicio 15
// function gerarTabuada(numero: number) {
//     console.log(
//         `
//         ${numero} X 0 = 0
//         ${numero} X 1 = ${numero * 1}
//         ${numero} X 2 = ${numero * 2}
//         ${numero} X 3 = ${numero * 3}
//         ${numero} X 4 = ${numero * 4}
//         ${numero} X 5 = ${numero * 5}
//         ${numero} X 6 = ${numero * 6}
//         ${numero} X 7 = ${numero * 7}
//         ${numero} X 8 = ${numero * 8}
//         ${numero} X 9 = ${numero * 9}
//         ${numero} X 10 = ${numero * 10}
//         `
//     )
// }

// Exercicio 16
// let randomNumber = Math.floor(Math.random() * 101)
// let varControl = true

// function advinheNumero(numero: number) {
//     if (numero < randomNumber) {
//         alert(`Chute um valor maior!`)
//     } else if (numero > randomNumber){
//         alert(`Chute um valor menor!`)
//     } else if (numero == randomNumber) {
//         alert(`Parabens voce acertou, o numero e ${randomNumber}!`)
//         varControl = false
//     }
// }
// advinheNumero(Number(prompt(`Digite um numero:`)))

// while (varControl) {
//     advinheNumero(Number(prompt(`Digite um numero:`)))
// }

// Exercicio 17
// type Objeto = {
//     nome: String
// }

// let objetoTeste: Objeto = {
//     nome: `Piloto`
// }

// function verficarPropriedade(objeto: Objeto, texto:String) {
//     if (objeto.hasOwnProperty(`${texto}`)) {
//         console.log(`O objeto possui esta propriedade`)
//     } else {
//         console.log(`O objeto nao possui essa propriedade`)
//     }
// }

// verficarPropriedade(objetoTeste, `nome`)

// Exercicio 18
// function calcularPrecoProduto(valorDecusto: number, margemDeLucro: number, valorDoFrete: number) {
//     let valorFinal = (valorDecusto * (margemDeLucro + 1)) + valorDoFrete
//     return valorFinal
// }

// let valorTeste = calcularPrecoProduto(100, 0.15, 12)
// console.log(valorTeste.toFixed(2))

// Exercicio 19
// function maiorPalavra(texto: string) {
//     let arrayTexto: string[] = texto.split(` `)
//     let maiorTamanho: number = 0
//     let maiorTag: number = 0
//     for (let index = 0; index < arrayTexto.length; index++) {
//         if (arrayTexto[index].length > maiorTamanho){
//             maiorTamanho = arrayTexto[index].length
//             maiorTag = index
//         }
//     }
//     alert(`A maior palavra digitada foi ${arrayTexto[maiorTag]}`)
// }

// maiorPalavra(prompt(`Digite uma frase:`))

// Exercicio 20
// let arrayString: string[] = ["Estudar", "e", "muito", "bom"]

// function quadroRetangular(texto: string[]) {
//     console.log(`*********`)
//     for (const element of arrayString) {
//         console.log(`*${element}*`)
//     }
//     console.log(`*********`)
// }

// quadroRetangular(arrayString)

// Exercicio 21
// let arrayString: string[] = ["Estudar", "e", "muito", "bom"]
// let arrayTest: string[] = []

// function maisQueCinco(texto: string[]) {
    
//     for (const elemento of arrayString) {
//         if (elemento.length > 5 ) {
//             arrayTest.push(elemento)
//         }
//     } 
//     return arrayTest
// }

// let arrayFinal = maisQueCinco(arrayString)
// console.log(arrayFinal)


// Exercicio 22
// type Livro = {
//     titulo: string,
//     autor: string,
//     ano: string
// }

// let arrayObjetos: Livro[] = [
//     { titulo: 'Livro A', autor: 'Jorge', ano: '2001' },
//     { titulo: 'Livro B', autor: 'Jorge', ano: '2005' },
//     { titulo: 'Livro C', autor: 'Carlos', ano: '2010' }
// ]

// function selecionarAutores(arrayLivros: Livro[], autor: string) {
//     let arrayFuncao: Livro[] = []
//     for (let index = 0; index < arrayLivros.length; index++) {
//         if (arrayLivros[index].autor == autor) {
//             arrayFuncao.push(arrayLivros[index])
//         }
//     }
//     return arrayFuncao
// }
// let arrayFinal: Livro[] = selecionarAutores(arrayObjetos, 'Jorge')
// console.log(arrayFinal)

// Exercicio 23
// type Carro = {
//     nome: string;
//     idade: number;
// }

// let arrayPessoas: Carro[] = [
//     { nome: 'Marcia', idade: 35 },
//     { nome: 'Joao', idade: 40 },
//     { nome: 'Paula', idade: 25 }
// ]

// function selecionarPessoaMaisVelha(arrayPessoas: Carro[]) {
//     let maiorIdade: number = 0
//     let idadeIndex: number = 0
//     for (let index = 0; index < arrayPessoas.length; index++) {
//         if (arrayPessoas[index].idade > maiorIdade) {
//             maiorIdade = arrayPessoas[index].idade
//             idadeIndex = index
//         }
//     }
//     let pessoaMaisVelha: string = arrayPessoas[idadeIndex].nome
//     return pessoaMaisVelha
// }

// let pessoa: string = selecionarPessoaMaisVelha(arrayPessoas)
// console.log(pessoa)

// Exercicio 24
// type Carro = {
//     marca: string;
//     modelo: string;
//     ano: number;
// }

// let arrayCarros: Carro[] = [
//     { marca: 'Toyota', modelo: 'Corolla', ano: 2001 },
//     { marca: 'Honda', modelo: 'Civic', ano: 2005 },
//     { marca: 'Ford', modelo: 'Mustang', ano: 2010 }
// ]

// function selecionarAno(arrayCarros: Carro[], anoFuncao: number) {
//     let arrayFuncao: Carro[] = []
//     for (let index = 0; index < arrayCarros.length; index++) {
//         if (arrayCarros[index].ano > anoFuncao) {
//             arrayFuncao.push(arrayCarros[index])
//         }
//     }
//     return arrayFuncao
// }
// let arrayFinal: Carro[] = selecionarAno(arrayCarros, 2004)
// console.log(arrayFinal)

// Exercicio 25
// let stringTeste: string = `Chama no dale`


// function inverterString(texto: string) {
//     let stringArray: string[] = texto.split(``)
//     let stringInvertidaArray: string[] = []

//     for (let index = stringArray.length - 1 ; index >= 0; index--) {
//         stringInvertidaArray.push(stringArray[index])
//     }

//     let stringFinal = stringInvertidaArray.join(``)
//     return stringFinal
// } 

// let stringInvertida: string = inverterString(stringTeste)
// console.log(stringInvertida)
