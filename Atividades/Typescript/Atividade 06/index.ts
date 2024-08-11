// Exercício 01
// R-> For possui um ciclo definido de iteracoes determinado pelo seu teste condicional, for possui um indice proprio ja na sua sintaxe, while nao sabemos ao certo quantas iteracoes serao necessarias para se encerrar o laco de repeticao e precisamos implementar um contador proprio que ira ditar quando o laco deve ser encerrado 

// Exercício 02
// R-> No geral utilizamos For quando ja conhecemos quantas iteracoes nosso codigo devera realizar enquanto while utilizamos quando nao sabemos ao certo quantas iteracaoes serao necessarias

// Exercício 03
// let i: number = 0
// while (i < 10) {
//     console.log("Testando uma frase!")
//     i++
// }


// Exercício 04
// let i:number = 465484133
// while (i > 10) {
//     console.log(i)
//     i /= 35
// }

// Exercício 05
// let i: number = 0
// do {
//     console.log(i)
//     i++
// } while (i < 5);

// Exercício 06
// let index: number = 1
// while (index <= 10) {
//     console.log(index)
//     index++
// }

// Exercício 07
// let index: number = 10
// while (index >= 1) {
//     console.log(index)
//     index--
// }


// Exercício 08
// let index: number = 1
// let resultado: number = 0
// while (index <= 100) {
//     resultado += index
//     index++
//     console.log(resultado)
// }

// Exercício 09
// let index: number = 1
// let fatorial: number = 1
// while (index <= 5) {
//     fatorial *= index
//     index++
//     console.log(fatorial)
// }

// Exercício 10
// let index:number = 0
// console.log(`Tabuada de 9:`)
// while (index <= 10) {
//     console.log(`9 X ${index} = ${9*index}`)
//     index++
// }

// Exercício 11
// let index = Number(prompt("Digite um numero: "))
// let listaNumeros: number[] = []

// if (index == 0) {
//     alert("Lista vazia!")
// } else {
//     listaNumeros.push(index)
// }

// while (index !== 0) {
//     index = Number(prompt("Digite um numero: "))
//     if (index !== 0) {
//         listaNumeros.push(index)
//     }
// }

// if (listaNumeros.length > 0) {
//     let varTeste: number = listaNumeros[0]
//     let maior: number = listaNumeros[0]
//     let menor: number = listaNumeros[0]

//     for (let index = 0; index < listaNumeros.length; index++) {
//         varTeste = listaNumeros[index]
//         if (varTeste >= maior) {
//             maior = varTeste
//         }
//         if (varTeste <= menor) {
//         } menor = varTeste
//     }

//     alert(`O maior valor fornecido foi: ${maior}\nO menor valor fornecido foi: ${menor}`)
// }

// Exercício 12
// let index = Number(prompt("Digite um numero: "))
// let listaNumeros: number[] = []

// if (index == -1) {
//     alert("Lista vazia!")
// } else {
//     listaNumeros.push(index) 
// }

// while (index !== -1) {
//     index = Number(prompt("Digite um numero: "))
//     if (index !== -1) {
//         listaNumeros.push(index)
//     }
// }

// if (listaNumeros.length > 0) {
//     let soma:number = 0
//     for (let index = 0; index < listaNumeros.length; index++) {
//         soma += listaNumeros[index]
//     }
//     let media: number = soma / listaNumeros.length
//     alert(`A media foi: ${media.toFixed(2)}`)
// }

// Exercício 13
// let numero = prompt(`Digite um numero: `)
// let numeroArray: string[] = numero.split('')
// let resultado: number = 0

// for (let index = 0; index < numeroArray.length; index++) {
//     resultado += (Number(numeroArray[index])) ** 3
// }

// alert(`Resultado: ${resultado}`)

// Exercício 14
// let index: number = 1
// let indexArray: number[] = []

// while (index <= 100) {
//     if (index % 2 == 1) {
//         indexArray.push(index)
//     }
//     index++
// }
// console.log(indexArray)

// Exercício 15
// let index: number = 1
// let indexArray: number[] = []

// while (index <= 50) {
//     if (index % 3 == 0) {
//         indexArray.push(index)
//     }
//     index++
// }
// console.log(indexArray)


// Exercício 16
// let listaDeAprovados: number[] = []
// let index: number = 0

// while (index < 5) {
//     let nota = Number(prompt(`Digite uma nota:`))
//     if (nota >= 7){
//         listaDeAprovados.push(nota)
//     }
//     index++
// }

// alert(`${listaDeAprovados.length} alunos foram aprovados`)

// Exercício 17
// let numero = Number(prompt(`Digite um numero inteiro: `))
// let numerosParesArray: number[] = []

// if (numero == 0) {
//     alert(`Programa encerrado!`)
// } else {
//     numerosParesArray.push(numero)
// }

// let index: number = 0

// while (numero !== 0) {
//     numero = Number(prompt(`Digite um numero inteiro: `))
//     if (numero % 2 == 1) {
//         index++
//     } else if (index < 1){
//          numerosParesArray.push(numero)
//     }
// }

// alert(`Foram digitados ${numerosParesArray.length} numeros pares antes do primeiro numero impar!`)

// Exercício 18
// let numero = Number(prompt(`Digite um numero`))
// let paresArray: number[] = []
// let imparesArray: number[] = []

// if (numero == 0) {
//     alert(`Programa encerrado!`)
// } else if (numero % 2 == 0) {
//     paresArray.push(numero)
// } else if (numero % 2 == 1) {
//     imparesArray.push(numero)
// }

// if (paresArray.length > 0 || imparesArray.length > 0) {
//     while (numero !== 0) {
//         numero = Number(prompt(`Digite um numero`))
//         if (numero !== 0) {
//             if (numero % 2 == 0){
//                 paresArray.push(numero)
//             } else {
//                 imparesArray.push(numero)
//             }
//         }
//     }
//     alert(`Foram digitados ${paresArray.length} numeros pares e ${imparesArray.length} numeros impares!`)
// }

// Exercício 19
// let numero = Number(prompt())
// let contador2: number = 0
// let contador3: number = 0
// let contador5: number = 0
// let listaNumeros: number[] = []

// if (numero == 0) {
//     alert(`Programa encerrado`)
// } else {
//     listaNumeros.push(numero)
//     while (numero !== 0 ) {
//         numero = Number(prompt())
//         if (numero !== 0) {
//             listaNumeros.push(numero)
//         }
//     }
//     let index: number = 0
//     while (index < listaNumeros.length) {
//         if (listaNumeros[index] % 2 == 0) {
//             contador2++
//         }
//         if (listaNumeros[index] % 3 == 0){
//             contador3++
//         }
//         if (listaNumeros[index] % 5 == 0){
//             contador5++
//         }

//         index++
//     }
//     alert(`Resultado: ${contador2} numeros sao divisiveis por 2.\n${contador3} numero divisiveis por 3.\n${contador5} numeros divisiveis por 5.`)
// }


// Exercício 20
// let numero = Number(prompt(`Digite um numero: `))
// let numeroArray: number[] = []
// if (numero == 0) {
//     alert(`Programa encerrado!`)
// } else {
//     while (numero !== 0) {
//         if (numero % 3 == 0) {
//             numeroArray.push(numero)
//         }
//         numero = Number(prompt(`Digite um numero: `))
//     }

//     let soma: number = 0

//     for (let index = 0; index < numeroArray.length; index++) {
//         soma += numeroArray[index]
//     }

//     let media: number = soma / numeroArray.length
//     alert(`A media dos numeros divisiveis por 3 informados e de: ${media}`)
// }

// Exercício 21
// let numero = Number(prompt(`Digite um numero: `))
// let numeroString: string = String(numero)
// let numeroArray: string[] = numeroString.split("")
// let contador: number = 0
// if (numero == 0) {
//     alert(`Programa encerrado`)
// } else {
//     while (numero !== 0) {
//         if (numeroArray.length > 3) {
//             contador++
//         }
//         numero = Number(prompt(`Digite um numero: `))
//     }
//     if (contador > 0) {
//         alert(`Foram digitados ${contador} numeros com mais de 3 digitos!`)
//     } else {
//         alert(`Nenhum numero digitado tem mais de 3 digitos!`)
//     }
// }

// Exercício 22
// let numero = Number(prompt(`Digite um numero no intervalo entre 50 e 100:`))
// let numeroArray: number[] = []
// while (numero !== 0) {
//     if (50 <= numero && numero <= 100) {
//         numeroArray.push(numero)
//     }
//     numero = Number(prompt(`Digite um numero no intervalo entre 50 e 100:`))
// }

// if (numeroArray.length > 0) {
//     let soma: number = 0

//     for (let index = 0; index < numeroArray.length; index++) {
//         soma += numeroArray[index]
//     }

//     let media: number = soma / numeroArray.length


//     alert(`A media entre os numeros digitados que estao contidos no intervalo [50, 100] e: ${media}.`)
// } else {
//     alert(`Nao foi digitado nenhum numero dentro do intervalo.`)
// }

// Exercício 23
// let index = Number(prompt("Digite um numero: "))
// let listaNumeros: number[] = []

// if (index == 0) {
//     alert("Lista vazia!")
// } else {
//     listaNumeros.push(index)
// }

// while (index !== 0) {
//     index = Number(prompt("Digite um numero: "))
//     if (index !== 0 && index > 0 && index % 2 == 1) {
//         listaNumeros.push(index)
//     }
// }

// if (listaNumeros.length > 0) {
//     let varTeste: number = listaNumeros[0]
//     let menor: number = listaNumeros[0]

//     for (let index = 0; index < listaNumeros.length; index++) {
//         varTeste = listaNumeros[index]
//         if (varTeste <= menor) {
//         } menor = varTeste
//     }

//     alert(`O menor valor positivo e impar fornecido foi: ${menor}`)
// }

// Exercício 24
// let numero1 = Number(prompt(`Digite um numero`))
// let numerosArray: number[] = []
// let paresArray: number[] = []
// let imparesArray: number[] = []

// let numero2

// if (numero1 == 0) {
//     alert(`Programa encerrado!`)
// } else {
//     while (numero2 !== 0) {
//         numero2 = prompt(`Digite um numero: `)
//     }
//     let index = numero1
//     while (index <= numero2) {
//         if (index % 2 == 0) {
//             paresArray.push(index)
//         } else if (index % 2 == 1){
//             imparesArray.push(index)
//         }
//         index++
//     }
//     alert(`Foram digitados ${paresArray.length} numeros pares.\nForam digitados ${imparesArray.length} numeros impares.`)
// }
