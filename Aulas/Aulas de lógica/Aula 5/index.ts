type Carro = {
    ano: number,
    marca: string
}

const corolla:Carro = {
    ano: 2024,
    marca: "Toyota"
}

const gol:Carro = {
    ano: 1999,
    marca: "Volkswagen"
}

const uno:Carro = {
    ano: 2010,
    marca: "Fiat"
}

let Carros = [
    corolla,
    gol,
    uno
]

for (let index = 0; index < Carros.length; index++) {
    console.log(Carros[index].marca)
}