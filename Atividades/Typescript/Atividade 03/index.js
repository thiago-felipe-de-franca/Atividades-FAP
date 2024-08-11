// Exercício 1
// let frase = prompt("Entre a primeira frase")
// console.log(frase)
// Exercício 2
// const string: String = "123"
// console.log(typeof Number(string))
// const number: Number = 321
// console.log(typeof String(string))
// Exercício 3
// const numero1 = prompt("Digite o primeiro número")
// const numero2 = prompt("Digite o segundo número")
// let resultado = Number(numero1) + Number(numero2)
// console.log(resultado)
// // Exercício 4
// const string1 = "Estudar "
// const string2 = "é bom!"
// console.log(string1 + string2)
// const numero3 = 48
// console.log(string1 + string2 + " " + numero3)
// Exercício 5
// const nomeUsuario1 = prompt("Digite o seu nome: ")
// alert("Seja bem-vindo " + nomeUsuario1 + "!")
// Exercício 6
// const idadeUsuario1 = prompt("Digite sua idade: ")
// console.log(Number(idadeUsuario1))
// Exercício 7
// let number1 = prompt("Digite um número: ")
// let number2 = parseFloat(number1 as string) 
// console.log(number2)
// console.log(typeof number2)
// Exercício 8
// const number1 = Number(prompt("Digite o primeiro número: "))
// const number2 = Number(prompt("Digite o segundo número: "))
// const resultado = `A soma de ${number1} e ${number2} é igual a ${number1 + number2}!`
// alert(resultado)
// Exercício 9
// let number1 = Number(prompt("Digite um número decimal: "))
// number1 = number1 ** 2
// console.log(number1)
// Exercício 10
// const anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))
// alert(`A sua idade é ${2024 - anoNascimento}`)
// Exercício 11
// const primeiroNome = prompt("Digite o seu nome e sobrenome: ")
// const resultado: string = primeiroNome.replace(" ", "")
// console.log(resultado)
// Exercício 12
// const sequencia = prompt("Digite uma sequência de números separados por espaços: ")
// const resultado: string[] = sequencia.split(" ")
// alert(`Você digitou ${resultado.length} vez(es)`)
// console.log(resultado)
// Exercício 13
// const nomeAnimal = prompt("Digite o nome de um animal: ")
// alert(`O nome do animal é ${nomeAnimal!}`)
// Exercício 14
// let nome = prompt("Digite o seu nome: ")
// let nomeInvertido = nome?.split(" ")
// console.log(nomeInvertido)
// alert(`O seu nome invertido é: ${nomeInvertido[1]} ${nomeInvertido[0]}`)
// Exercício 15
// const frase1 = prompt("Digite uma frase: ")
// const frase2 = frase1?.replace(" ", "")
// alert(`A sua frase tem ${frase2?.length} letras!`)
// Exercício 16
// const numero = Number(prompt("Digite um número: "))
// if (numero % 2 == 0){
//     alert(`O número digitado, ${numero}, é par!`)
// }
// else if (numero % 2 == 1){
//     alert(`O número digitado, ${numero}, é ímpar`)
// }
// Exercício 17
// const numero = Number(prompt("Digite um número: "))
// if (numero >= 0){
//     alert("O número digitado é positivo!")
// } else {
//     alert("O número digitado é negativo!")
// }
// Exercício 18
// const numero1 = Number(prompt("Digite o primeiro número: "))
// const numero2 = Number(prompt("Digite o segundo número: "))
// if (numero1 > numero2){
//     alert(`${numero1} é o maior número!`)
// } else if(numero2 > numero1){
//     alert(`${numero2} é o maior número!`)
// }
// Exercício 19
// const altura = Number(prompt("Digite sua altura: "))
// const peso = Number(prompt("Digite sua peso: "))
// const imc:number = peso / altura ** 2
// if (imc < 18.5){
//     alert(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso!`)
// } else if (18.5 <= imc && imc < 25){
//     alert(`Seu IMC é ${imc.toFixed(2)}, você está com peso normal!`)
// } else if (25 <= imc && imc < 30){
//     alert(`Seu IMC é ${imc.toFixed(2)}, você está com excesso de peso!`)
// } else if(30 <= imc && imc < 35){
//     alert(`Seu IMC é ${imc.toFixed(2)}, você está com obesidade!`)
// } else{
//     alert(`Seu IMC é ${imc.toFixed(2)}, você está com obesidade extrema!`)
// }
// Exercício 20
// const nome = prompt("Digite o seu nome: ")
// if (nome?.length > 5){
//     alert(`O seu nome possui mais de 5 caracteres!`)
// } else {
//     alert('O seu nome não possui mais de 5 caracteres!')
// }
// Exercício 21
// const estadoCivil = prompt("Digite o seu estado civil: ")
// alert(`Você é ${estadoCivil}(a)!`)
// Exercício 22
// const base = Number(prompt("Digite a base do retangulo:"))
// const altura = Number(prompt("Digite a altura do retangulo:"))
// const area = base * altura / 2
// alert(`A area do triangulo e ${area.toFixed(2)}!`)
// Exercício 23
// const cidade = prompt("Digite o nome da sua cidade:")
// if (cidade[0] == "S"){
//     alert("A sua cidade comeca com a letra S")
// } else{
//     alert("A sua cidade nao comeca com a letra S")
// }
// Exercício 24
// const num1 = Number(prompt("Insira um numero decimal:"))
// const num2 = Number(prompt("Insira outro numero decimal:"))
// const resto: number = num1 % num2
// alert(`O resto da divisao entre ${num1} e ${num2} e: ${resto}`)
// Exercício 25
// let num1 = prompt("Digite um numero decimal: ")
// let num2 = parseInt(num1)
// alert(num2)
// Exercício 26
// let numero1 = Number(prompt("Digite um número"))
// numero1 += 10
// const numero2 = numero1.toString()
// alert(`${numero1} + 10 é igual a: ${numero2}`)
// Exercício 27
// let data1 = prompt('Digite uma data no formato "dd/mm/aaaa"')
// let data2 = data1?.split("/")
// const dd = Number(data2[0])
// const mm = Number(data2[1])
// const aaaa = Number(data2[2])
// Exercício 28
// const cidade = prompt("Digite sua cidade:")
// const estado = "Pernambuco"
// alert(`Você mora em ${cidade}, ${estado}!`)
// Exercício 29
// const ano = Number(prompt("Digite o seu ano de nascimento: "))
// alert(`Bem-vindo ao nosso programa, nascido em ${ano}!`)
// Exercício 30
// const numero = prompt("Digite um número: ")
// const palavra = prompt("Digite uma palavra: ")
// alert(`${numero} ${palavra}`)
// Exercício 31
// const produto = prompt("Digite o nome do produto:")
// const precoProduto = prompt("Digite o preço do produto:")
// alert(`O produto ${produto} custa: R$${precoProduto}.`)
// Exercício 32
// const numero1 = Number(prompt("Digite um número: "))
// const numero2 = 2 * numero1
// alert(`O dobro de ${numero1} é igual a : ${numero2}`)
// Exercício 33
// const email = prompt("Digite o sue email: ")
// alert(`Obrigado por digitar o e-mail: ${email}`)
// Exercício 34
// const num1 = Number(prompt(`Digite um numero inteiro: `))
// const num2 = Number(prompt(`Digite outro numero inteiro: `))
// alert(
//     `A soma entre ${num1} e ${num2} e igual a : ${num1 + num2}\nA diferenca entre ${num1} e ${num2} e igual a : ${num1 - num2}\nO produto entre ${num1} e ${num2} e igual a : ${num1 * num2}\nA divisao entre ${num1} e ${num2} e igual a : ${num1 / num2}`
// )
// Exercício 35
// const base = Number(prompt("Digite a base do retangulo:"))
// const altura = Number(prompt("Digite a altura do retangulo:"))
// const area = base * altura / 2
// alert(`A area do triangulo e ${area.toFixed(2)}!`)
// Exercício 36
// const raio = Number(prompt(`Digite o raio da cincunferencia:`))
// const perimetro = 2 * Math.PI * raio
// alert(`O perimetro do circulo e de : ${perimetro!}`)
// Exercício 37
// const base = Number(prompt("Digite a base do retangulo:"))
// const altura = Number(prompt("Digite a altura do retangulo:"))
// const perimetro = (base + altura) * 2
// alert(`A area do perimetro e ${perimetro.toFixed(2)}!`)
// Exercício 38
// const num1 = Number(prompt(`Digite o primeiro numero decimal`))
// const num2 = Number(prompt(`Digite o segundo numero decimal`))
// const num3 = Number(prompt(`Digite o terceiro numero decimal`))
// const media = (num1 + num2 + num3 / 3)
// alert(`A media dos tres numeros e de: ${media}`)
// Exercício 39
// const idade = Number(prompt(`Digite a sua idade:`))
// const meses = idade * 12
// const dias = idade * 365
// alert(`Voce viveu ${meses} meses e ${dias} dias!`)
// Exercício 40
// const valor = Number(prompt(`Digite o valor a ser convertido:`))
// const taxaDeCambio = Number(prompt(`Digite o valor do dolar:`))
// const dolar = valor / taxaDeCambio
// alert(`O valor ${valor} em reais equivale a ${dolar} em dolares!`)
// Exercício 41
// let num = Number(prompt(`Digite um numero decimal: `))
// num = Math.round(num)
// alert(num)
// Exercício 42
// const num1 = Number(prompt(`Digite o primeiro numero:`))
// const num2 = Number(prompt(`Digite o segundo numero:`))
// const num3 = Number(prompt(`Digite o terceiro numero:`))
// const resultado = (num1 + num2) * num3
// alert(`O resultado da operacao dos tres numeros e de: ${resultado}!`)
// Exercício 43
// const tempCelsius = Number(prompt(`Digite a temperatura: `))
// const tempFahrenheit = (tempCelsius * 9 /5) + 32 
// alert(`A temperatura informada, em Fahrenheit e de: ${tempFahrenheit.toFixed(1)}F`)
