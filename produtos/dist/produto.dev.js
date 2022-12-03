"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require('../biblioteca/extensoes.js');

var Produto =
/*#__PURE__*/
function () {
  function Produto(codigo, descricao, valor, fornecedor) {
    _classCallCheck(this, Produto);

    this.codigo = codigo;
    this.descricao = descricao;
    this.valor = valor;
    this.fornecedor = fornecedor;
  }

  _createClass(Produto, [{
    key: "toString",
    value: function toString() {
      return "C\xF3digo: ".concat(this.codigo, " Descr.: ").concat(this.descricao, " Valor: ").concat(parseFloat(this.valor).format());
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
    key: "Descricao",
    get: function get() {
      return this.descricao;
    },
    set: function set(descricao) {
      this.descricao = descricao;
    }
  }, {
    key: "Valor",
    get: function get() {
      return this.valor;
    },
    set: function set(valor) {
      this.valor = valor;
    }
  }, {
    key: "Fornecedor",
    get: function get() {
      return this.fornecedor;
    },
    set: function set(fornecedor) {
      this.fornecedor = fornecedor;
    }
  }]);

  return Produto;
}();

module.exports = Produto;