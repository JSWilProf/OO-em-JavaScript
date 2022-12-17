"use strict";

var readline = require('readline-sync');

var Endereco = require('./endereco.js');

var Fisica = require('./fisica.js');

var Juridica = require('./juridica.js');

var cadastra = function cadastra(pessoa) {
  pessoa.nome = readline.question('Informe o Nome: ');
  var endereco = new Endereco();
  endereco.logradouro = readline.question('Informe o Logradouro: ');
  endereco.numero = readline.question('Informe o Número: ');
  endereco.bairro = readline.question('Informe o Bairro: ');
  endereco.cep = readline.question('Informe o CEP: ');
  pessoa.endereco = endereco;

  if (Object.hasOwn(pessoa, 'cpf')) {
    pessoa.cpf = readline.question('Informe o nº do CPF: ');
    pessoa.nascimento = readline.question('Informe a Data de Nascimento: ');
  } else {
    pessoa.cnpj = readline.question('Informe o CNPJ: ');
    pessoa.razao_social = readline.question('Informe a Razão Social: ');
  }

  return pessoa;
};

var lista = [];
var idx = 0;

do {
  var op = readline.question("Cadastro de Pessoas\n    \n    F - Pessoa F\xEDsica\n    J - Pessoa Jur\xEDdica\n    S - Sair\n    \n    op\xE7\xE3o: ").toLowerCase();

  if (op == 'a') {
    lista[idx++] = cadastra(new Fisica());
  } else if (op == 'e') {
    lista[idx++] = cadastra(new Juridica());
  }
} while (op != 's');

console.log(lista.map(function (pessoa) {
  return pessoa.toString();
}).join('\n'));