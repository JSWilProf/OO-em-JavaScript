const Taxas = require('./taxas.js')
require('../biblioteca/extensoes.js')

class Frete {
    constructor(peso, distancia) {
        this.peso = peso;
        this.distancia = distancia;
    }
    
    total() {
        var frete = 0;
        
        if(this.peso <= 500) {
            frete = 625.73;
        } else if(this.peso <= 1000) {
            frete = 1349.32;
        } else if(this.peso <= 1500) {
            frete = 2162.95;
        } else {
            frete = 3070.06;
        }
        
        return (frete +
                this.distancia * Taxas.kmPorLitro +
                frete * Taxas.ipi +
                frete * Taxas.icms).format();
    }
}

module.exports = Frete;