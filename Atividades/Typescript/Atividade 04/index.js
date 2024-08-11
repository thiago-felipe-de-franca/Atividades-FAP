// Exercício 1
// const num = Number(prompt(`Digite um numero:`))
// if (num > 0){
//     alert(`O numero digitado e positivo!`)
// } else if(num < 0){
//     alert(`O numero digitado e negativo!`)
// } else if (num == 0) {
//     alert(`O numero digitado e igual a zero!`)
// }
// Exercício 2
// const num = Number(prompt(`Digite sua idade:`))
// if (num >= 18){
//     alert(`Voce e maior de idade!`)
// } else {
//     alert(`Voce e menor de idade!`)
// }
// Exercício 3
// const num1 = Number(prompt(`Digite um numero:`))
// const num2 = Number(prompt(`Digite outro numero:`))
// if (num1 > num2) {
//     alert(`O primeiro numero e o maior!`)
// } else if (num2 > num1) {
//     alert(`O segundo numero e o maior!`)
// } else {
//     alert(`Os numeros sao iguais!`)
// }
// Exercício 4
// const num = Number(prompt(`Digite um numero:`))
// if (num % 2 == 0){
//     alert(`O numero e par!`)
// } else if (num % 2 == 1){
//     alert(`O numero e impar!`)
// }
// Exercício 5
// const num1 = Number(prompt(`Digite um numero:`))
// const num2 = Number(prompt(`Digite o segundo numero:`))
// const num3 = Number(prompt(`Digite o terceiro numero:`))
// const media:number = (num1 + num2 + num3) / 3
// if (media >= 7){
//     alert(`Aluno aprovado!`)
// } else {
//     alert(`Aluno reprovado`)
// }
// Exercício 6
// const nome1 = prompt(`Digite um nome:`)
// const nome2 = prompt(`Digite outro nome:`)
// if (nome1?.length > nome2?.length) {
//     alert(`O nome ${nome1} possui mais caracteres!`)
// } else if (nome2?.length > nome1?.length) {
//     alert(`O nome ${nome2} possui mais caracteres!`)
// }
// Exercício 7
// let letra = prompt(`Digite uma letra:`)
// letra = letra?.toLowerCase()
// console.log(letra)
// if (letra == 'a') {
//     alert(`A letra e uma vogal`)
// } else if (letra == 'e'){
//     alert(`A letra e uma vogal`)
// } else if (letra == 'i'){
//     alert(`A letra e uma vogal`)
// } else if (letra == 'o'){
//     alert(`A letra e uma vogal`)
// } else if (letra == 'u'){
//     alert(`A letra e uma vogal`)
// } else {
//     alert(`A letra e uma consoante`)
// }
// Exercício 8
// let num0: Number = 0
// let num1 = Number(prompt(`Digite um numero:`))
// let num2 = Number(prompt(`Digite o segundo numero:`))
// let num3 = Number(prompt(`Digite o terceiro numero:`))
// let maior = undefined
// let segundoMaior = undefined
// let terceiroMaior = undefined
// if (num1 >= num2) {
//     maior = num1
// }
// Exercício 9
// const peso: number = Number(prompt(`Digite o seu peso:`))
// const altura: number = Number(prompt(`Digite a sua altura:`))
// let imc: number = peso / altura ** 2
// if (imc >= 18.5 && imc < 25 ) {
//     alert(`Voce e uma pessoa com peso normal, imc: ${imc.toFixed(2)}!`)
// } else if (imc >= 25 && imc < 30 ) {
//     alert(`Voce e uma pessoa com sobrepeso, imc: ${imc.toFixed(2)}!`)
// } else if (imc >= 30 && imc < 35 ) {
//     alert(`Voce e uma pessoa obesa, imc: ${imc.toFixed(2)}!`)
// } else if (imc >= 35) {
//     alert(`Voce e uma pessoa muito obesa, imc: ${imc.toFixed(2)}!`)
// } 
// Exercício 10
// const mes = Number(prompt(`Digite um numero de 1 a 12`))
// if (mes == 1) {
//     alert("janeiro")
// } else if (mes == 2) {
//     alert("fevereiro")
// } else if (mes == 3) {
//     alert("Mmarco")
// } else if (mes == 4) {
//     alert("abril")
// } else if (mes == 5) {
//     alert("maio")
// } else if (mes == 6) {
//     alert("junho")
// } else if (mes == 7) {
//     alert("julho")
// } else if (mes == 8) {
//     alert("Agosto")
// } else if (mes == 9) {
//     alert("setembro")
// } else if (mes == 10) {
//     alert("outubro")
// } else if (mes == 11) {
//     alert("novembro")
// } else if (mes == 12) {
//     alert("dezembro")
// } 
// Exercício 11
// const salario = Number(prompt(`Digite o salario:`))
// let novoSalario: number = 0
// if (salario > 1500){
//     novoSalario = salario * 1.10
// } else {
//     novoSalario = salario * 1.15
// }
// alert(`Novo salario: ${novoSalario}!`)
// Exercício 12
// const num = Number(prompt(`Digite um numero: `))
// if (num % 3 == 0 && num % 5 == 0) {
//     alert(`O numero e divisivel por 3 por 5 ao mesmo tempo!`)
// }
// Exercício 13
// const dia = prompt(`Digite o dia da semana por extenso: `)
// if (dia == "domingo" || dia == 'sabado') {
//     alert(`Esse dia e do final de semana`)
// } else {
//     alert(`Esse dia e util`)
// }
// Exercício 14
// const nota = Number(prompt(`Digite a nota:`))
// switch (nota) {
//     case 5:
//         alert(`Muito bom`)
//         break;
//     case 4:
//         alert(`Bom`)
//         break;
//     case 3:
//         alert(`Regular`)
//         break;
//     case 2:
//         alert(`Insuficiente`)
//         break;
//     case 1:
//         alert(`Muito insuficiente`)
//         break;
//     default:
//         break;
// }
// Exercício 15
// const dia = Number(prompt(`Digite um numero de 1 a 7:`))
// switch (dia) {
//     case 7:
//         alert(`Sabado`)
//         break;
//     case 6:
//         alert(`Sexta-feira`)
//         break;
//     case 5:
//         alert(`Quinta-feira`)
//         break;
//     case 4:
//         alert(`Quarta-feira`)
//         break;
//     case 3:
//         alert(`Terca-feira`)
//         break;
//     case 2:
//         alert(`Segunda-feira`)
//         break;
//     case 1:
//         alert(`Domingo`)
//         break;
//     default:
//         break;
// }
// Exercício 17
// const idade = Number(prompt(`Digite sua idade:`))
// if (idade >= 0 && idade <= 1) {
//     alert(`Voce e um bebe!`)
// } else if (idade > 1 && idade <= 12) {
//     alert(`Voce e uma crianca!`)
// } else if (idade > 12 && idade <= 18) {
//     alert(`Voce e um adolescente!`)
// } else if (idade > 18) {
//     alert(`Voce e um adulto!`)
// }
// Exercício 18
// const estadoCivil = prompt(`Digite o seu estado civil:`)
// switch (estadoCivil) {
//     case "solteiro":
//         alert(`Voce e solteiro!`)
//         break;
//     case "casado":
//         alert(`Voce e casado!`)
//         break;
//     case "divorciado":
//         alert(`Voce e divorciado!`)
//         break;
//     case "viuvo":
//         alert(`Voce e viuvo!`)
//         break;
//     default:
//         break;
// }
// Exercício 19
// const num1 = Number(prompt(`Digite o primeiro numero:`))
// const num2 = Number(prompt(`Digite o segundo numero:`))
// const escolha = Number(prompt(`(1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).`))
// switch (escolha) {
//     case 1:
//         alert(`${num1 + num2}`)
//         break;
//     case 2:
//         alert(`${num1 - num2}`)
//         break;
//     case 3:
//         alert(`${num1 * num2}`)
//         break;
//     case 4:
//         alert(`${num1 / num2}`)
//         break;
//     default:
//         break;
// }
