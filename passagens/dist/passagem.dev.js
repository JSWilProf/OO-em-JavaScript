"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./constantes.js'),
    Constantes = _require.Constantes,
    Voo = _require.Voo,
    Destino = _require.Destino;

require('../biblioteca/extensoes.js');

var Passagem =
/*#__PURE__*/
function () {
  function Passagem() {
    var vip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var seguro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var bagagem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var voo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Voo.Economica;
    var destino = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Destino.Capitais;

    _classCallCheck(this, Passagem);

    this.vip = vip;
    this.seguro = seguro;
    this.bagagem = bagagem;
    this.voo = voo;
    this.destino = destino;
  }

  _createClass(Passagem, [{
    key: "total",
    value: function total() {
      var total = 0;
      if (this.vip) total -= Constantes.vip;
      if (this.seguro) total += Constantes.seguro;
      if (this.bagagem) total += Constantes.bagagem;

      switch (this.voo.indice) {
        case 1:
          total += 1120.83; // Econômica

          break;

        case 2:
          total += 1690.45; // Econômica Premium

          break;

        case 3:
          total += 2392.45; // Executiva

          break;

        default:
          total += 3260.56;
        // Primeira Classe
      }

      ;

      switch (this.destino.indice) {
        case 1:
          total += 32.95; // Capitais

          break;

        case 2:
          total += 25.89; // Cidades Turísticas

          break;

        default:
          total += 21.45;
        // Interior
      }

      ;
      return total.format();
    }
  }]);

  return Passagem;
}();

module.exports = Passagem;