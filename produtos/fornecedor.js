class Fornecedor {
    constructor (codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
    
    get Codigo() { return this.codigo; }
    set Codigo (codigo) { this.codigo = codigo; }
    
    get Nome () { return this.nome; }
    set Nome (nome) { this.nome = nome; }
    
    
    toString() {
        return `Código: ${this.codigo} Fornecedor: ${this.nome}`;
    }
}

module.exports = Fornecedor;