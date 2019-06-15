// sum.test.js
const Validator = require('../www/js/fp-complete/fp2');

test("validateName check empty", () => {
  const result = Validator.validateName({
    value: "",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "",
    valid: false,
    message: "名前を入力してください"
  });
});

test("validateName check not empty", () => {
  const result = Validator.validateName({
    value: "Not empty",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "Not empty",
    valid: true,
    message: ""
  })
});

test("validateZip check empty", () => {
  const result = Validator.validateZip({
    value: "",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "",
    valid: false,
    message: "郵便番号を入力してください"
  })
});

test("validateZip check ZIP code format", () => {
  const result = Validator.validateZip({
    value: "0001111",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "0001111",
    valid: false,
    message: "000-0000の形式で入力してください"
  })
});

test("validateZip pass ZIP code format", () => {
  const result = Validator.validateZip({
    value: "000-1111",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "000-1111",
    valid: true,
    message: ""
  })
});

