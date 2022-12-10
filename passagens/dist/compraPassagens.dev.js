"use strict";

/*
    Compra de passagem aérea
    
    Uma aplicação hipotética que utiliza o tema de compra de passagems 
    aérias para demonstrar as instruções de seleção, declaração e atribuição de variáveis.
    
    Requisitos:
        Aplica bônus para clientes VIP R$ 50,00
        Cobrança de seguro R$ 20,00
        
        Apresenta menu para escolha da Classe de voô
            econômica - R$ 1.120,83;
            econômica premium - R$ 1.690,45;
            executiva - R$ 2.392,45;
            primeira classe - R$ 3.260,56
        
        Acrescenta taxa de embarque
            1º categoria - Capitais — R$ 32,95;
            2º categoria - Cidades Turísticas — R$ 25,89;
            3º categoria - Interior — R$ 21,45
        
        Acrescenta taxa de bagagem R$ 60,00
*/
var _require = require('./constantes.js'),
    Voo = _require.Voo,
    Destino = _require.Destino;

var Passagem = require('./passagem.js');

var readline = require('readline-sync');

var prompt = function prompt(mensagem) {
  return readline.question("".concat(mensagem, ": ")).slice(0, 1).toLowerCase() === 's';
};

var opcao = function opcao(mensagem) {
  return parseInt(readline.question("".concat(mensagem, ": ")).slice(0, 1)) - 1;
};

console.log('Cálculo do preço de passagem aérea\n');
var vip = prompt('É cliente VIP? S/N');
var seguro = prompt('Deseja contratar seguro? S/N');
var bagagem = prompt('Tem bagagem extra? S/N');
console.log('Indique qual é a classe de Voô que deseja\n');
var voos = Object.values(Voo);
voos.forEach(function (voo) {
  return console.log("".concat(voo.indice, " - ").concat(voo.titulo));
});
var classeDeVoo = voos[opcao("\nClasse de Vo\xF4")];
console.log('Indique qual é o Destino\n');
var destinos = Object.values(Destino);
destinos.forEach(function (destino) {
  return console.log("".concat(destino.indice, " - ").concat(destino.titulo));
});
var tipoDeDestino = destinos[opcao("\nDestino")];
var passagem = new Passagem(vip, seguro, bagagem, classeDeVoo, tipoDeDestino);
console.log("O custo total da passagem \xE9 R$ ".concat(passagem.total()));