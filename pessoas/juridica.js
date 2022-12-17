const Pessoa = require("./pessoa");

class Juridica extends Pessoa {
    constructor (nome, endereco, cnpj, razao_social) {
        super(nome, endereco)
        this. cnpj = cnpj;
        this. razao_social = razao_social;
    }
    
    get Cnpj () { return this.cnpj; }
    set Cnpj (cnpj) { this.cnpj = cnpj; }

    get Razao_social() { return this.razao_social; }
    set Razao_social (razao_social) { this.razao_social = razao_social; }

    
    toString() {
        return `${super.toString()} CNPJ: ${this.cnpj} Razão Social: ${this.razao_social}`
    }
}

module.exports = Juridica;