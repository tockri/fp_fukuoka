// sum.test.js
const fp1 = require('./fp1');

test('validateName check empty', () => {
  const r1 = fp1.validateName({
    value: "",
    valid: null,
    message: ""
  });
  expect(r1).toStrictEqual({
    value: "",
    valid: false,
    message: "名前を入力してください"
  });
});

test("validateName check not empty", () => {
  const r1 = fp1.validateName({
    value: "Not empty",
    valid: null,
    message: ""
  });
  expect(r1).toStrictEqual({
    value: "Not empty",
    valid: true,
    message: ""
  })
});