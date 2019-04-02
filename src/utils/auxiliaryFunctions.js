import faker from "faker";

export function getRandomIncorrectText() {
  var text = "";

  var upperLimit = faker.random.number({
    min: 0,
    max: 200
  });

  var len = faker.random.number({
    min: 1,
    max: upperLimit
  });

  for (var i = 0; i < len; i++) {
    if (Math.random() > 0.5) text += "\n";

    if (Math.random() > 0.5) text += " ";

    if (Math.random() > 0.5) text += "\t";
  }

  return text;
}
