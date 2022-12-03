const Produto = require("./produto");

class Alimenticio extends Produto {
    constructor (codigo, descricao, valor, fornecedor, validade, produzido) {
        super(codigo, descricao, valor, fornecedor)
        this. validade = validade;
        this. produzido = produzido;
    }
    
    get Validade () { return this.validade; }
    set Validade (validade) { this.validade = validade; }

    get Produzido() { return this.produzido; }
    set Produzido (produzido) { this.produzido = produzido; }

    
    toString() {
        return `${super.toString()} Data de Validade: ${this.validade} Data de Produção: ${this.produzido}`
    }
}

module.exports = Alimenticio;