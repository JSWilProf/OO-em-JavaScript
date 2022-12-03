// Extensão ao Number chamado format
// permite formatar um float com notação de valores monetários

Number.prototype.format = function(digitos, decimal, milhar) {
    // O Numero ao qual será aplicada a formatação
    var numero = this;
    // Quantidade de digitos decimais
    var digitos = isNaN(digitos = Math.abs(digitos)) ? 2 : digitos;
    // Símbolo separador de decimal
    var decimal = decimal == undefined ? "," : decimal;
    // Símbolo separador de milhar
    var milhar = milhar == undefined ? "." : milhar;
    // Indica se o número é negativo
    var sinal = numero < 0 ? "-" : "";
    // Formata o Número com separador padrão de decimal (Americano)
    var texto = String(
        parseInt(
            numero = Math.abs(
                Number(numero) || 0
            ).toFixed(decimal)
        )
    );
    // Quantidade de separadores de centenas numéricas existentes no número
    var centenas = (centenas = texto.length) > 3 ? centenas % 3 : 0;

            // Apresenta o Sinal
    return sinal +
            // Apresenta a primeira centena
            (centenas ? texto.substring(0, centenas) + milhar : "") +
            // Insere os separadores de milhar
            texto.substring(centenas).replace(/(\d{3})(?=\d)/g, "$1" + milhar) +
            // Apresenta a parte decimal
            (digitos ? decimal + Math.abs(numero - texto).toFixed(digitos).slice(2) : "");
}

module.exports = Number;