// sum.test.js
const Validator = require('../www/js/fp/fp4');

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
    value: "000111a",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "000111a",
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

test("validateZip change ZIP code ascii", () => {
  const result = Validator.validateZip({
    value: "０００−１１１１",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "000-1111",
    valid: true,
    message: ""
  })
});

test("validateZip change ZIP code format", () => {
  const result = Validator.validateZip({
    value: "０００１１１１",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "000-1111",
    valid: true,
    message: ""
  })
});

test("validateMail change mail address ascii", () => {
  const result = Validator.validateMail({
    value: "ｍｙ＠ｂ．ＣＯＭ",
    valid: true,
    message: ""
  });
  expect(result).toStrictEqual({
    value: "my@b.com",
    valid: true,
    message: ""
  })
});

