"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Taxas = require('./taxas.js');

require('../biblioteca/extensoes.js');

var Frete =
/*#__PURE__*/
function () {
  function Frete(peso, distancia) {
    _classCallCheck(this, Frete);

    this.peso = peso;
    this.distancia = distancia;
  }

  _createClass(Frete, [{
    key: "total",
    value: function total() {
      var frete = 0;

      if (this.peso <= 500) {
        frete = 625.73;
      } else if (this.peso <= 1000) {
        frete = 1349.32;
      } else if (this.peso <= 1500) {
        frete = 2162.95;
      } else {
        frete = 3070.06;
      }

      return (frete + this.distancia * Taxas.kmPorLitro + frete * Taxas.ipi + frete * Taxas.icms).format();
    }
  }]);

  return Frete;
}();

module.exports = Frete;