jest.dontMock("../functions.js");
jest.dontMock("immutable");

const u = require("../functions.js");
const immutable = require("immutable");

describe("updateIn", () => {
  it("handles nested updates correctly", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.updateIn(v1, ["a", "b", "c"], (x, y) => x+y, 2);
    expect(v2.toJS()).toEqual({"a": {"b": {"c": 3}}});
  });
});

describe("update", () => {
  it("updates map", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.update(v1, "a", u.updateIn, ["b", "c"], (x, y) => x+y, 2);
    expect(v2.toJS()).toEqual({"a": {"b": {"c": 3}}});
  });
});

describe("getIn", () => {
  it("gets nested value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.getIn(v1, ["a", "b", "c"]);
    expect(v2).toEqual(1);
  });
});

describe("get", () => {
  it("gets value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.get(v1, "a");
    expect(v2.toJS()).toEqual({"b": {"c": 1}});
  });
});

describe("hasIn", () => {
  it("checks nested value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    expect(u.hasIn(v1, ["a", "b", "c"])).toBeTruthy();
    expect(u.hasIn(v1, ["a", "b", "d"])).toBeFalsy();
  });
});

describe("has", () => {
  it("checks value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    expect(u.has(v1, "a")).toBeTruthy();
    expect(u.has(v1, "b")).toBeFalsy();
  });
});

describe("setIn", () => {
  it("sets nested value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.setIn(v1, ["a", "b", "c"], 3);
    expect(v2.toJS()).toEqual({"a": {"b": {"c": 3}}});
  });
});

describe("set", () => {
  it("sets value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.set(v1, "a", 1);
    expect(v2.toJS()).toEqual({"a": 1});
  });
});

describe("removeIn", () => {
  it("removes nested value", () => {
    let v1 = immutable.fromJS({"a": {"b": {"c": 1}}});
    let v2 = u.removeIn(v1, ["a", "b", "c"]);
    expect(v2.toJS()).toEqual({"a": {"b": {}}});
  });
});

describe("remove", () => {
  it("removes value", () => {
    let v1 = immutable.fromJS({"a": 1, "b": 2});
    let v2 = u.remove(v1, "b");
    expect(v2.toJS()).toEqual({"a": 1});
  });
});

describe("clear", () => {
  it("clears collection", () => {
    expect(u.clear(immutable.fromJS({})).toJS()).toEqual({});
  });
});
