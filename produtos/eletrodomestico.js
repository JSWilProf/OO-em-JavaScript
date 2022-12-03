const Produto = require("./produto");

class Eletrodomestico extends Produto {
    constructor (codigo, descricao, valor, fornecedor, voltagem, potencia) {
        super(codigo, descricao, valor, fornecedor)
        this. voltagem = voltagem;
        this. potencia = potencia;
    }
    
    get Voltagem () { return this.voltagem; }
    set Voltagem (voltagem) { this.voltagem = voltagem; }

    get Potencia() { return this.potencia; }
    set Potencia (potencia) { this.potencia = potencia; }

    
    toString() {
        return `${super.toString()} Voltagem: ${this.voltagem} Potência: ${this.potencia}`
    }
}

module.exports = Eletrodomestico;