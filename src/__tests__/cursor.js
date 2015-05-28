jest.dontMock("../functions.js");
jest.dontMock("immutable");
jest.dontMock("../atom.js");
jest.dontMock("../cursor.js");

const u = require("../functions.js");
const immutable = require("immutable");
const Atom = require("../atom.js");
const Cursor = require("../cursor.js");

describe("cursor", () => {
  let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
  let a = new Atom(v1);
  let c1 = new Cursor(a, ["a", "b"]);
  let c2 = new Cursor(c1, ["c"]);
  it("can be derefed", () => {
    expect(u.deref(c1).toJS()).toEqual({"c": 1});
  });
  it("can be swaped", () => {
    u.swap(c1, u.updateIn, ["c"], (x, y) => x+y, 2);
    expect(u.deref(c1).toJS()).toEqual({"c": 3});
    expect(u.deref(a).toJS()).toEqual({"a": {"b": {"c": 3}}});
  });
  it("can be nested", () => {
    expect(u.deref(c2)).toEqual(3);
    u.swap(c2, (x) => x-2);
    expect(u.deref(a).toJS()).toEqual({"a": {"b": {"c": 1}}});
  });
});
