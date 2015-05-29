import EventEmitter from "eventemitter3";
import * as u from "./functions.js";

export default class Atom extends EventEmitter {

  constructor(value) {
    super();
    this._value = value;
  }

  swap(func, ...args) {
    const value = func(this._value, ...args);
    const oldValue = this._value;
    if (u.is(oldValue, value)) return;

    this._value = value;
    this.emit("change", oldValue, value);
  }

  deref() {
    return this._value;
  }

  toString() {return "Atom(" + this._value + ")"; }
  toSource() {return this.toString(); }
  inspect() {return this.toString(); }
}
