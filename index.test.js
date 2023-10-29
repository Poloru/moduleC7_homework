const getReverseString = require('./index');

describe("Тест функции getReverseString", () => {
  it('Должен перевернуть строку "abc"', () => expect(getReverseString("abc")).toBe("cba"));
  it('Должен перевернуть строку "qwerty"', () => expect(getReverseString("qwerty")).toBe("ytrewq"));
});
