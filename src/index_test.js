import { assert } from "chai";
import { greet } from "./index"

describe("greet package", () => {
  it("the first test", () => {
    assert.equal(2 + 3, 5);
  });
  it("greets a person by name", () => {
  	assert.equal(greet("sheldon"), "hello sheldon");
  });
  it("greets a person flirtatiously if drunk", () => {
  	assert.equal(greet("sheldon", true), "hello sheldon, you look sexy today");
  });
});
