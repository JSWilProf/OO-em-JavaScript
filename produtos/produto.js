require('../biblioteca/extensoes.js')

class Produto {
    constructor (codigo, descricao, valor, fornecedor) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this. fornecedor = fornecedor;
    }
    
    get Codigo () { return this.codigo; }
    set Codigo (codigo) { this.codigo = codigo; }

    get Descricao() { return this.descricao; }
    set Descricao (descricao) { this.descricao = descricao; }

    get Valor() { return this.valor; }
    set Valor (valor) { this.valor = valor; }

    get Fornecedor () { return this.fornecedor; }
    set Fornecedor (fornecedor) { this.fornecedor = fornecedor; }
    
    toString() {
        return `Código: ${this.codigo} Descr.: ${this.descricao} Valor: ${parseFloat(this.valor).format()}`
    }
}

module.exports = Produto;