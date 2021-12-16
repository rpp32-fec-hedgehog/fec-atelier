const QA = require("../../client/src/components/QA");
// import QA from "../client/src/QA";

test('jest test', function() {
  console.log(QA);
  expect(QA.testAdd()).toBe(4);
})
