import { textFieldValidator } from "../validators";
import faker from "faker";
import { getRandomIncorrectText } from "../auxiliaryFunctions";

describe("textFieldValidator tests", () => {
  test("Empty textField", () => {
    const value = textFieldValidator("");
    expect(value).toBeTruthy();
  });

  test("Too long text", () => {
    var len = 0;

    while (len < 30) {
      var text = faker.random.word();
      len = text.length;
    }
    const value = textFieldValidator(text);
    expect(len).toBeGreaterThan(30);
    expect(typeof text).toBe("string");
    expect(value).toBeTruthy();
  });

  test("Only whitespace characters in textField", () => {
    const text = getRandomIncorrectText();
    const value = textFieldValidator(text);
    expect(value).toBeTruthy();
  });

  test("Correct input", () => {
    var text = faker.random.word();
    var len = text.length;

    while (len > 30) {
      text = faker.random.word();
      len = text.length;
    }

    const value = textFieldValidator(text);
    expect(len).toBeLessThanOrEqual(30);
    expect(typeof text).toBe("string");
    expect(value).toBeFalsy();
  });
});
