'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Basic enumerated type.
 * 
 * Implemented in ES2015, with a Babel-generated
 * version that downshifts to older ES5 idioms.
 */

var Enum = function () {
  function Enum() {
    _classCallCheck(this, Enum);

    this._index = undefined;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (Array.isArray(args[0])) {
      this.values = args[0];
      this.index = args[1] || 0;
    } else {
      this.values = args;
      this.index = 0;
    }
  }

  _createClass(Enum, [{
    key: 'indexOf',
    value: function indexOf(v) {
      return this.values.indexOf(v);
    }
  }, {
    key: 'index',
    get: function get() {
      return this._index;
    },
    set: function set(i) {
      if (i < 0 || i >= this.values.length) throw TypeError('index ' + i + ' invalid');
      this._index = i;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.values[this.index];
    },
    set: function set(v) {
      var index = this.indexOf(v);
      if (index >= 0) {
        this.index = index;
      } else {
        var vrepr = JSON.stringify(v);
        throw TypeError('value ' + vrepr + ' invalid');
      }
    }
  }], [{
    key: 'fromString',
    value: function fromString(s) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return new Enum(s.split(' '), index);
    }
  }]);

  return Enum;
}();

if (typeof module === 'undefined') module = {};

exports = module.exports = Enum;
