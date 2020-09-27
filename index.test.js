const assert = require("assert").strict;
const test = require("baretest")("demo");

test("it smokes", () => {
  assert.ok(true);
});

test.run().then((passed) => process.exit(passed === true ? 0 : 1));
