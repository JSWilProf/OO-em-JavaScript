"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fornecedor =
/*#__PURE__*/
function () {
  function Fornecedor(codigo, nome) {
    _classCallCheck(this, Fornecedor);

    this.codigo = codigo;
    this.nome = nome;
  }

  _createClass(Fornecedor, [{
    key: "toString",
    value: function toString() {
      return "C\xF3digo: ".concat(this.codigo, " Fornecedor: ").concat(this.nome);
    }
  }, {
    key: "Codigo",
    get: function get() {
      return this.codigo;
    },
    set: function set(codigo) {
      this.codigo = codigo;
    }
  }, {
    key: "Nome",
    get: function get() {
      return this.nome;
    },
    set: function set(nome) {
      this.nome = nome;
    }
  }]);

  return Fornecedor;
}();

module.exports = Fornecedor;