const readline = require('readline-sync');
const Endereco = require('./endereco.js');
const Fisica = require('./fisica.js');
const Juridica = require('./juridica.js');

const cadastra = function(pessoa) {
    pessoa.nome = readline.question('Informe o Nome: '); 

    let endereco = new Endereco();
    endereco.logradouro = readline.question('Informe o Logradouro: '); 
    endereco.numero = readline.question('Informe o Número: '); 
    endereco.bairro = readline.question('Informe o Bairro: '); 
    endereco.cep = readline.question('Informe o CEP: '); 

    pessoa.endereco = endereco;
      
    if(Object.hasOwn(pessoa, 'cpf')) {
        pessoa.cpf = readline.question('Informe o nº do CPF: '); 
        pessoa.nascimento = readline.question('Informe a Data de Nascimento: ');     
    } else {
        pessoa.cnpj = readline.question('Informe o CNPJ: '); 
        pessoa.razao_social = readline.question('Informe a Razão Social: ');     
    }
    
    return pessoa;
}

var lista = [];
var idx = 0;

do {
    var op = readline.question(`Cadastro de Pessoas
    
    F - Pessoa Física
    J - Pessoa Jurídica
    S - Sair
    
    opção: `).toLowerCase();
    
    if(op == 'a') {
        lista[idx++] = cadastra(new Fisica());
    } else if(op == 'e') {
        lista[idx++] = cadastra(new Juridica());
    }
} while(op != 's');

console.log(lista.map(pessoa => pessoa.toString()).join('\n'));