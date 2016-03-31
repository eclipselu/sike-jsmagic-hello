"use strict";

var _chai = require("chai");

var _index = require("./index");

describe("greet package", function () {
  it("the first test", function () {
    _chai.assert.equal(2 + 3, 5);
  });
  it("greets a person by name", function () {
    _chai.assert.equal((0, _index.greet)("sheldon"), "hello sheldon");
  });
  it("greets a person flirtatiously if drunk", function () {
    _chai.assert.equal((0, _index.greet)("sheldon", true), "hello sheldon, you look sexy today");
  });
});