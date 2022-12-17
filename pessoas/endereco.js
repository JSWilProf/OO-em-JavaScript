class Endereco {
    constructor (logradouro, numero, bairro, cep) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
    }
    
    get Logradouro() { return this.logradouro; }
    set Logradouro (logradouro) { this.logradouro = logradouro; }
    
    get Numero () { return this.numero; }
    set Numero (numero) { this.numero = numero; }
    
    get Bairro () { return this.bairro; }
    set Bairro (bairro) { this.bairro = bairro; }
    
    get Cep () { return this.cep; }
    set Cep (cep) { this.cep = cep; }
    
    
    toString() {
        return `${this.logradouro}, ${this.numero} - ${this.bairro} CEP: ${this.cep}`;
    }
}

module.exports = Endereco;