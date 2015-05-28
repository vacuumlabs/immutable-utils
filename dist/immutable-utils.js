'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _eventemitter3 = require('eventemitter3');

var _eventemitter32 = _interopRequireDefault(_eventemitter3);

var Atom = (function (_EventEmitter) {
  function Atom(value) {
    _classCallCheck(this, Atom);

    _get(Object.getPrototypeOf(Atom.prototype), 'constructor', this).call(this);
    this._value = value;
  }

  _inherits(Atom, _EventEmitter);

  _createClass(Atom, [{
    key: 'swap',
    value: function swap(func) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var value = func.apply(undefined, [this._value].concat(args));
      var oldValue = this._value;
      if (oldValue === value) return;

      this._value = value;
      this.emit('change', oldValue, value);
    }
  }, {
    key: 'deref',
    value: function deref() {
      return this._value;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'Atom(' + this._value + ')';
    }
  }, {
    key: 'toSource',
    value: function toSource() {
      return this.toString();
    }
  }, {
    key: 'inspect',
    value: function inspect() {
      return this.toString();
    }
  }]);

  return Atom;
})(_eventemitter32['default']);

exports['default'] = Atom;
module.exports = exports['default'];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _functionsJs = require("./functions.js");

var u = _interopRequireWildcard(_functionsJs);

var Cursor = (function () {
  function Cursor(ref, path) {
    _classCallCheck(this, Cursor);

    this._ref = ref;
    this._path = path;
  }

  _createClass(Cursor, [{
    key: "swap",
    value: function swap(func) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      u.swap.apply(u, [this._ref, u.updateIn, this._path, func].concat(args));
    }
  }, {
    key: "deref",
    value: function deref() {
      return u.deref(this._ref).getIn(this._path);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Cursor(" + this._ref + ", " + this._path + ")";
    }
  }, {
    key: "toSource",
    value: function toSource() {
      return this.toString();
    }
  }, {
    key: "inspect",
    value: function inspect() {
      return this.toString();
    }
  }]);

  return Cursor;
})();

exports["default"] = Cursor;
module.exports = exports["default"];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = swap;
exports.deref = deref;
exports.updateIn = updateIn;
exports.update = update;
exports.getIn = getIn;
exports.get = get;
exports.setIn = setIn;
exports.set = set;
exports.hasIn = hasIn;
exports.has = has;
exports.removeIn = removeIn;
exports.remove = remove;
exports.clear = clear;

function swap(atom, func) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return atom.swap.apply(atom, [func].concat(args));
}

function deref(ref) {
  return ref.deref();
}

function updateIn(val, keyPath, func) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  return val.updateIn(keyPath, function (x) {
    return func.apply(undefined, [x].concat(args));
  });
}

function update(val, key, func) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  return updateIn.apply(undefined, [val, [key], func].concat(args));
}

function getIn(val, keyPath, notSetValue) {
  return val.getIn(keyPath, notSetValue);
}

function get(val, key, notSetValue) {
  return val.get(key, notSetValue);
}

function setIn(val, keyPath, newValue) {
  return val.setIn(keyPath, newValue);
}

function set(val, key, newValue) {
  return val.set(key, newValue);
}

function hasIn(val, keyPath) {
  return val.hasIn(keyPath);
}

function has(val, key) {
  return val.has(key);
}

function removeIn(val, keyPath) {
  return val.removeIn(keyPath);
}

function remove(val, key) {
  return val.remove(key);
}

function clear(val) {
  return val.clear();
}
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _atomJs = require('./atom.js');

_defaults(exports, _interopRequireWildcard(_atomJs));

var _cursorJs = require('./cursor.js');

_defaults(exports, _interopRequireWildcard(_cursorJs));

var _functionsJs = require('./functions.js');

_defaults(exports, _interopRequireWildcard(_functionsJs));