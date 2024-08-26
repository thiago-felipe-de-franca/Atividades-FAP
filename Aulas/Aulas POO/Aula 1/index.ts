// Criar as classes:
// 1. Carro
// 2. Conta Bancária
// 3. Celular
/*Criar pelos menos 03 objetos de cada classe.*/

//1. Carro
class Carro {
    marca: string;
    modelo: string;
    cor: string;
    ano: number;
    placa: string;
  
    constructor(
      marca: string,
      modelo: string,
      cor: string,
      ano: number,
      placa: string
    ) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.ano = ano;
      this.placa = placa;
    }
  }
  
  const carro1 = new Carro("Toyota", "Yaris", "Branco", 2021, "QYR-6D06");
  const carro2 = new Carro("Toyota", "Etios", "Branco", 2019, "PDS-2806");
  const carro3 = new Carro("Renault", "Kwid", "Vermelho", 2023, "RFT-2350");
  
  //2. Conta Bancária
  class ContaBancaria {
    numero: number;
    titular: string;
    saldo: number;
  
    constructor(numero: number, titular: string, saldo: number) {
      this.numero = numero;
      this.titular = titular;
      this.saldo = saldo;
    }
  }
  
  const contaBancaria1 = new ContaBancaria(
    1234567890 - 1,
    "Catarina Guimarães",
    15.0
  );
  const contaBancaria2 = new ContaBancaria(
    9876054321 - 2,
    "Ana Clara Silva",
    1.412
  );
  const contaBancaria3 = new ContaBancaria(
    5678911223 - 4,
    "Pedro Henrique Santos",
    6.0
  );
  
  //3. Celular
  class Celular {
    marca: string;
    modelo: string;
    cor: string;
    ano: number;
    isGarantia: boolean;
  
    constructor( marca: string, modelo: string, cor: string, ano: number, isGarantia: boolean) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.ano = ano;
      this.isGarantia = isGarantia;
    }
  }
  
  const celular1 = new Celular("Samsung", "Galaxy S21 Ultra", "Azul", 2023, false);
  const celular2 = new Celular("Samsung", "A53-5G", "Branco", 2022, false);
  const celular3 = new Celular("Apple", "IPHONE 15", "Preto", 2024, true);