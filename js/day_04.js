import { parseLines } from "./util.js";

export const part1 = (input) => {
  const lines = parseLines(input);
  const cards = lines.map(getParts);
  // compare the arrays
  return cards.reduce((acc, { winning, mine }) => {
    const matches = winning.filter((e) => mine.includes(e));
    let points = 0;
    if (matches.length === 1) {
      return acc + 1;
    }
    if (matches.length > 1) {
      points = 1;
      for (let index = 1; index < matches.length; index++) {
        points = points * 2;
      }
    }

    return acc + points;
  }, 0);
};

const getParts = (line) => {
  const [_, numbers] = line.split(": ");

  const [winning, mine] = numbers.split(" | ");
  // single digits will be " 5" where double will be "22"
  return {
    winning: winning.split(" ").filter((e) => e.match(/^\d+/) !== null),
    mine: mine.split(" ").filter((e) => e.match(/^\d+/) !== null),
  };
};
