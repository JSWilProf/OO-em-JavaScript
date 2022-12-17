class Pessoa {
    constructor (nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    
    get Nome () { return this.nome; }
    set Nome (nome) { this.nome = nome; }

    get Endereco() { return this.endereco; }
    set Endereco (endereco) { this.endereco = endereco; }
    
    toString() {
        return `Nome: ${this.nome} ${this.endereco}`
    }
}

module.exports = Pessoa;