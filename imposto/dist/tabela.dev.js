"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tabela =
/*#__PURE__*/
function () {
  function Tabela() {
    _classCallCheck(this, Tabela);
  }

  _createClass(Tabela, null, [{
    key: "desconto",
    value: function desconto(salario) {
      var valor;

      if (salario < 1903.99) {
        valor = 0;
      } else if (salario <= 2826.65) {
        valor = salario * 7.5 / 100 - 142.8;
      } else if (salario <= 3751.05) {
        valor = salario * 15.0 / 100 - 354.8;
      } else if (salario <= 4664.68) {
        valor = salario * 22.5 / 100 - 636.13;
      } else {
        valor = salario * 27.5 / 100 - 869, 36;
      }

      return valor;
    }
  }]);

  return Tabela;
}();

module.exports = Tabela;