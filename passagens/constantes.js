class Constantes {
    static vip = 50.0;
    static seguro = 20.0;
    static bagagem = 60.0;
}

class Voo {
    static Economica = new Voo(1, "Econômica");
    static Premium = new Voo(2, "Econômica Premium");
    static Executiva = new Voo(3, "Executiva");
    static PrimeiraClasse = new Voo(4, "Primeira Classe");

    constructor(indice, titulo) {
        this.indice = indice;
        this.titulo = titulo;
    }
}

class Destino {
    static Capitais = new Destino(1, "Capitais");
    static Turisticas = new Destino(2, "Cidades Turísticas");
    static Interior = new Destino(3, "Interior");
        
    constructor(indice, titulo) {
        this.indice = indice;
        this.titulo = titulo;
    }
}

module.exports = { Constantes, Voo, Destino };