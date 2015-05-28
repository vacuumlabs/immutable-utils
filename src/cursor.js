import * as u from "./functions.js";
export default class Cursor {

  constructor(ref, path: Array<string>) {
    this._ref = ref;
    this._path = path;
  }

  swap(func, ...args) {
    u.swap(this._ref, u.updateIn, this._path, func, ...args);
  }

  deref() {
    return u.deref(this._ref).getIn(this._path);
  }

  toString() {return "Cursor(" + this._ref + ", " + this._path + ")"; }
  toSource() {return this.toString(); }
  inspect() {return this.toString(); }
}
