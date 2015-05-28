jest.dontMock("../functions.js");
jest.dontMock("immutable");
jest.dontMock("../atom.js");

const u = require("../functions.js");
const immutable = require("immutable");
const Atom = require("../atom.js");

describe("atom", () => {
  let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
  let a = new Atom(v1);
  it("can be derefed", () => {
    expect(u.deref(a)).toEqual(v1);
  });
  it("can be swaped", () => {
    u.swap(a, u.updateIn, ["a", "b", "c"], (x, y) => x+y, 2);
    expect(u.deref(a).toJS()).toEqual({"a": {"b": {"c": 3}}});
  });
});
