"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pessoa =
/*#__PURE__*/
function () {
  function Pessoa(nome, endereco) {
    _classCallCheck(this, Pessoa);

    this.nome = nome;
    this.endereco = endereco;
  }

  _createClass(Pessoa, [{
    key: "toString",
    value: function toString() {
      return "Nome: ".concat(this.nome, " ").concat(this.endereco);
    }
  }, {
    key: "Nome",
    get: function get() {
      return this.nome;
    },
    set: function set(nome) {
      this.nome = nome;
    }
  }, {
    key: "Endereco",
    get: function get() {
      return this.endereco;
    },
    set: function set(endereco) {
      this.endereco = endereco;
    }
  }]);

  return Pessoa;
}();

module.exports = Pessoa;