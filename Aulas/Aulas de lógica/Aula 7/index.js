var listaDeNotas = [];
var nota = Number(prompt("Digite uma nota: "));
while (nota !== -1) {
    nota = Number(prompt("Digite uma nota: "));
    if (nota !== -1) {
        listaDeNotas.push(nota); //
    }
}
alert(listaDeNotas);
function maiorNota(lista) {
    var notaMN = lista[0];
    for (var index = 0; index < lista.length; index++) {
        if (lista[index] >= notaMN) {
            notaMN = lista[index];
        }
    }
    return notaMN;
}
var nota1 = maiorNota(listaDeNotas);
console.log(nota1);
alert("Maior nota: ".concat(nota1));
