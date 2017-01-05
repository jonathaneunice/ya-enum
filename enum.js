

/**
 * Basic enumerated type.
 */

class Enum {
  constructor(...args) {
    this._index = undefined;
    if (Array.isArray(args[0])) {
      this.values = args[0];
      this.index = args[1] || 0;
    } else {
      this.values = args;
      this.index = 0;
    }
  }

  static fromString(s, index=0) {
    return new Enum(s.split(' '), index);
  }

  get index() {
    return this._index;
  }

  set index(i) {
    if ((i < 0) || (i >= this.values.length))
      throw TypeError(`index ${i} invalid`);
    this._index = i;
  }

  get value() {
    return this.values[this.index];
  }

  set value(v) {
    var index = this.indexOf(v);
    if (index >= 0) {
      this.index = index;
    } else {
      var vrepr = JSON.stringify(v);
      throw TypeError(`value ${vrepr} invalid`);
    }
  }

  indexOf(v) {
    return this.values.indexOf(v);
  }
}

if (typeof module === 'undefined')
  module = {};

exports = module.exports = Enum;
