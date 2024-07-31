// Exercício 01
// R-> o comando for serve para criar um laço de repetição onde sao realizadas iterações de acordo com o desejo do usuário
// Exercício 02
// R-> o comando for possui um teste condicional se essa condicção for verdadeira a iteração acontece e o laço se inici
// Exercício 03
// R-> Se o teste condicional for falso o laço se encerra
// Exercício 04
// R-> A o final da iteração e da execução do bloco de código o indíce recebe uma alteração que geralmente é de  +1 através do código "++".
// Exercício 05
// for (let index = 0; index < 10; index++) {
//     console.log("Testando uma frase!")
// }
// Exercício 06
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// Exercício 07
// for (let i = 0; i < 10; i++) {
//     if(i == 5) {
//         break
//     }
//     console.log(i)
// }
// Exercício 08
// for (let i = 0; i < 10; i++) {
//    if (i == 5) {
//     continue
//    }
//    console.log(i)
// }
// Exercício 09
// let nomes: string[] = [
//     'João',
//     'Paulo',
//     'Pedro',
//     'Gustavo',
//     'Maria'
// ]
// for (let n of nomes) {
//     console.log(n)
// }
// Exercício 10
// for (let index = 0; index < 10; index++) {
//     console.log(index + 1)
// }
// Exercício 11
// for (let index = 10; index > 0; index-- ) {
//     console.log(index)
// }
// Exercício 12
// let resultado:number = 0
// for (let index = 0; index < 101; index++) {
//     resultado += index
// }
// console.log(resultado)
// Exercício 13
// for (let index = 1; index <= 50; index++) {
//     if (index % 2 === 0) {
//     console.log(index)
//     }
// }
// Exercício 14
// Exercício 15
// let fatorial_5:number = 1
// for (let index = 1; index < 6; index++) {
//     fatorial_5 *= index
// }
// console.log(fatorial_5)
// Exercício 16
// let somatorio:number = 0
// let listaDeNotas:number[] = [
// ]
// for (let index = 0; index <= 5; index++) {
//     let nota = prompt("Digite a nota:")
//     listaDeNotas.push(Number(nota))
// }
// for (let index = 0; index <= 5; index++) {
//     somatorio += listaDeNotas[index]
// }
// const media: number = somatorio / 5
// console.log(media)
// Exercício 17
// for (let index = 1; index <= 50; index++) {
//     if (index % 3 == 0){
//         console.log(index)
//     }
// }
// Exercício 18
// let lista: number[] = []
// for (let index = 0; index < 10; index++) {
//     let numero = Number(prompt(`Digite um numero:`))
//     lista.push(numero)
// }
// let maior: number = lista[0]
// let menor: number = lista[0]
// for (let index = 0; index < lista.length; index++) {
//     if (lista[index] >= maior){
//         maior = lista[index]
//     }
//     if (lista[index] <= menor){
//         menor = lista[index]
//     }
// }
// alert(`O maior número digitado foi: ${maior}\nO menor número digitado foi: ${menor}`);
// Exercício 19
// for (let index = 1; index <= 100; index++) {
//     if (index % 2 == 1) {
//         console.log(index)
//     }  
// }
// Exercício 20
// let listaDeAprovados: number[] = []
// for (let index = 0; index < 5; index++) {
//     let nota = Number(prompt(`Digite uma nota:`))
//     if (nota >= 7){
//         listaDeAprovados.push(nota)
//     }
// }
// alert(`${listaDeAprovados.length} alunos foram aprovados`)
// Exercício 21
// let numero:string = prompt(`Digite um numero:`)
// let numeroArray: string[] = []
// let soma:number = 0
// numeroArray = numero.split('')
// for (let index = 0; index < numeroArray.length; index++) {
//     soma += Number(numeroArray[index])
// }
// alert(`${soma}`)
// Exercício 22
// let numero = Number(prompt(`Digite um numero:`))
// let numeroArray = []
// for (let index = 1; index <= numero; index++) {
//     if (numero % index == 0) {
//         numeroArray.push(index)
//     }
// }
// alert(`O numero ${numero} possui os seguintes divisores: ${numeroArray}`)
// Exercício 23
// let alturaArray: number[] = []
// let soma: number = 0
// for (let index = 0; index < 5; index++) {
//     let altura = Number(prompt(`Digite a altura: `))
//     alturaArray.push(altura)
// }
// for (let index = 0; index < alturaArray.length; index++) {
//     soma += alturaArray[index]
// }
// let res: number = soma / alturaArray.length
// alert(`A altura media foi de: ${res}!`)
// Exercício 24
// let numerosArray = []
// for (let index = 1; index <= 100; index++) {
//     if (index % 3 == 0 && index % 5 == 0) {
//         numerosArray.push(`FizzBuzz`)
//     } else if (index % 3 == 0) {
//         numerosArray.push(`Fizz`)
//     } else if (index % 5 == 0) {
//         numerosArray.push(`Buzz`)
//     } else {
//         numerosArray.push(String(index))
//     }
// }
// console.log(numerosArray)
// Exercício 25
// let numero:string = prompt(`Digite um numero:`)
// let numeroArray: string[] = []
// let soma:number = 0
// numeroArray = numero.split('')
// for (let index = 0; index < numeroArray.length; index++) {
//     if (Number(numeroArray[index]) % 2 == 0) {
//         soma += Number(numeroArray[index])
//     }
// }
// alert(`${soma}`)
// Exercício 26
// let numero: string = prompt(`Digite um numero:`)
// let numeroArray: string[] = []
// let numeroArrayInvertido = []
// numeroArray = numero.split(``)
// for (let index = (numeroArray.length - 1); index >= 0; index--) {
//     numeroArrayInvertido.push(numeroArray[index])
// }
// let res = numeroArrayInvertido.join(``)
// alert(res)
