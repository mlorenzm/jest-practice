const caesar = require("./caesarCipher");

test("Single word", () => {
  expect(caesar("hello", 2)).toBe("jgnnq");
});

test("Multiple words, same case", () => {
  expect(caesar("Hello world", 2)).toBe("Jgnnq yqtnf");
});

test("Go around Z-A", () => {
  expect(caesar("zzz", 2)).toBe("bbb");
});
