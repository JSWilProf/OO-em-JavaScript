class Tabela {
    static desconto(salario) {
        var valor;
        
        if(salario < 1903.99) {
            valor = 0;
        } else if(salario <= 2826.65) {
            valor = salario * 7.5 / 100 - 142.8
        } else if(salario <= 3751.05) {
            valor = salario * 15.0 / 100 - 354.8
        } else if(salario <= 4664.68) {
            valor = salario * 22.5 / 100 - 636.13
        } else {
            valor = salario * 27.5 / 100 - 869,36
        }
        
        return valor;
    }
}

module.exports = Tabela;