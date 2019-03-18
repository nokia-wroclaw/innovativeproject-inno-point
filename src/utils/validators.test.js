// ------------------------------------------------------------------------------ //
// ------------------------------ UNIT TESTS ------------------------------------ //
// ------------------------------------------------------------------------------ //

// Enter "npm test" to run tests.

import { textFieldValidator } from "./validators";

test("Empty textField", () => {
  const value = textFieldValidator("");
  expect(value).toBeTruthy();
});

function getRandomText(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

test("Too long text", () => {
  const len = Math.floor(Math.random() * 100 + 30);
  const text = getRandomText(len);
  const value = textFieldValidator(text);
  expect(len).toBeGreaterThan(30);
  expect(typeof text).toBe("string");
  expect(value).toBeTruthy();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIncorrectText() {
  var text = "";
  var upperLimit = getRandomInt(0, 200);
  var len = getRandomInt(1, upperLimit);

  for (var i = 0; i < len; i++) {
    if (Math.random() > 0.5) text += "\n";

    if (Math.random() > 0.5) text += " ";

    if (Math.random() > 0.5) text += "\t";
  }

  return text;
}

test("Only whitespace characters in textField", () => {
  const text = getRandomIncorrectText();
  const value = textFieldValidator(text);
  expect(value).toBeTruthy();
});

test("Correct input", () => {
  const len = Math.floor(Math.random() * 30 + 1);
  const text = getRandomText(len);
  const value = textFieldValidator(text);
  expect(len).toBeLessThanOrEqual(30);
  expect(typeof text).toBe("string");
  expect(value).toBeFalsy();
});
