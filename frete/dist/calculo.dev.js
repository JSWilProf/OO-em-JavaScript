"use strict";

/*

    Cálculo de frete para transporte de cargas
    
    Uma aplicação hipotética que utiliza o tema de cálculo de 
    frete para transporte de cargas para demonstrar as instruções 
    de seleção, declaração e atribuição de variáveis.
    
    Requisitos:
        Aplica taxa proporcional ao peso
            até 500 Kg - R$ 625,73;
            entre 500 até 1 Tn - R$ 1.349,32;
            entre 1 tn até 1,5 Tn - R$ 2.162,95;
            entre 1,5 tn até 2 Tn - R$ 3.070,06

        Calcular custo por Km rodado R$ 0,47 por Km
        Calcula 10% de IPI sobre o valor declarado da carga quando houver incidência
        Calcula 8% de ICMS sobre o valor declarado da carga

*/
var Frete = require('./frete.js');

var readline = require('readline-sync');

console.log('Cálculo de frete para transporte de carga\n');
var peso = readline.question('Qual é o peso a ser transportado?: ');
var distancia = readline.question('Qual é a distância a ser percorrida?: ');
console.log("O valor do frete \xE9 R$ ".concat(new Frete(peso, distancia).total()));