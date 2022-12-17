const Pessoa = require("./pessoa");

class Fisica extends Pessoa {
    constructor (nome, endereco, cpf, nascimento) {
        super(nome, endereco)
        this. cpf = cpf;
        this. nascimento = nascimento;
    }
    
    get Cpf () { return this.cpf; }
    set Cpf (cpf) { this.cpf = cpf; }

    get Nascimento() { return this.nascimento; }
    set Nascimento (nascimento) { this.nascimento = nascimento; }

    
    toString() {
        return `${super.toString()} CPF: ${this.cpf} Data de Nascimento: ${this.nascimento}`
    }
}

module.exports = Fisica;