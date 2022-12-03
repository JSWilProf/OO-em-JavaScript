"use strict";

/*
    Tabela do desconto de Imposto de Renda Mensal
    
    Faixa                     Taxa   Desconto
    de 1.903,99 até 2.826,65   7,5%   142,80
    de 2.826,66 até 3.751,05  15,0%   354,80
    de 3.751,06 até 4.664,68  22,5%   636,13
           acima de 4.664,68  27,5%   869,36
*/
var readline = require('readline-sync');

var Tabela = require('./tabela.js');

require('../biblioteca/extensoes.js');

salario = parseFloat(readline.question('Informe o Salário: '));
var desconto = Tabela.desconto(salario);
console.log("O Valor do desconto \xE9 R$ ".concat(desconto.format()));
console.log("O Sal\xE1rio l\xEDquido \xE9 R$ ".concat((salario - desconto).format()));