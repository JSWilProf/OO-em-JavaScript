const { Constantes, Voo, Destino } = require('./constantes.js')
require('../biblioteca/extensoes.js')


class Passagem {
    constructor(vip = false, seguro = true, bagagem = true, voo = Voo.Economica, destino = Destino.Capitais) {
        this.vip = vip;
        this.seguro = seguro;
        this.bagagem = bagagem;
        this.voo = voo;
        this.destino = destino;
    }
    
    total() {
        var total = 0;
        
        if (this.vip) total -= Constantes.vip;
        if (this.seguro) total += Constantes.seguro;
        if (this.bagagem) total += Constantes.bagagem;

        switch (this.voo.indice) {
            case 1:
                total += 1120.83;  // Econômica
                break;
            case 2:
                total += 1690.45;  // Econômica Premium
                break;
            case 3:
                total += 2392.45;  // Executiva
                break;
            default:
                total += 3260.56; // Primeira Classe
        };

        switch (this.destino.indice) {
            case 1:
                total += 32.95;   // Capitais
                break;
            case 2:
                total += 25.89;   // Cidades Turísticas
                break;
            default:
                total += 21.45;  // Interior
        };

        return total.format();
    }
}

module.exports = Passagem;
