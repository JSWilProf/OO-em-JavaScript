"use strict";

var readline = require('readline-sync');

var Fornecedor = require('./fornecedor.js');

var Alimenticio = require('./alimenticio.js');

var Eletrodomestico = require('./eletrodomestico.js');

var cadastra = function cadastra(produto) {
  produto.codigo = readline.question('Informe o Código: ');
  produto.descricao = readline.question('Informe a Descrição: ');
  produto.valor = readline.question('Informe o Valor: ');
  var fornecedor = new Fornecedor();
  fornecedor.codigo = readline.question('Informe o Código do Fornecedor: ');
  fornecedor.nome = readline.question('Informe o Nome do Fornecedor: ');
  produto.fornecedor = fornecedor; // Pela forma como a linguagem JavaScript implementa herança
  // não é possível determinar o subtipo do objeto criado
  // assim para distinquir um objeeto de outro utilizamos
  // Object.hasOwn(<instância>, <propriedade>)

  if (Object.hasOwn(produto, 'validade')) {
    produto.validade = readline.question('Informe a Data de Validade: ');
    produto.produzido = readline.question('Informe a Data de Produção: ');
  } else {
    produto.voltagem = readline.question('Informe a Voltagem: ');
    produto.potencia = readline.question('Informe a Potência: ');
  }

  return produto;
};

var lista = [];
var idx = 0;

do {
  var op = readline.question("Cadastro de Produtos\n    \n    A - Aliment\xEDcio\n    E - Eletrodom\xE9stico\n    S - Sair\n    \n    op\xE7\xE3o: ").toLowerCase();

  if (op == 'a') {
    lista[idx++] = cadastra(new Alimenticio());
  } else if (op == 'e') {
    lista[idx++] = cadastra(new Eletrodomestico());
  }
} while (op != 's');

console.log(lista.map(function (produto) {
  return produto.toString();
}).join('\n'));