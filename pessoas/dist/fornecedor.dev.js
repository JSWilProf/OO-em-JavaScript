"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Endereco =
/*#__PURE__*/
function () {
  function Endereco(logradouro, numero, bairro, cep) {
    _classCallCheck(this, Endereco);

    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cep = cep;
  }

  _createClass(Endereco, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.logradouro, ", ").concat(this.numero, " - ").concat(this.bairro, " CEP: ").concat(this.cep);
    }
  }, {
    key: "Logradouro",
    get: function get() {
      return this.logradouro;
    },
    set: function set(logradouro) {
      this.logradouro = logradouro;
    }
  }, {
    key: "Numero",
    get: function get() {
      return this.numero;
    },
    set: function set(numero) {
      this.numero = numero;
    }
  }, {
    key: "Bairro",
    get: function get() {
      return this.bairro;
    },
    set: function set(bairro) {
      this.bairro = bairro;
    }
  }, {
    key: "Cep",
    get: function get() {
      return this.cep;
    },
    set: function set(cep) {
      this.cep = cep;
    }
  }]);

  return Endereco;
}();

module.exports = Endereco;