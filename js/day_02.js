import { parseLines } from "./util.js";

export const part1 = (input) => {
  const lines = parseLines(input);
  const games = lines.map((l) => new Game(l));
  return games.reduce((acc, game) => {
    return game.isPossibleGame({ red: 12, green: 13, blue: 14 })
      ? (acc += game.id)
      : acc;
  }, 0);
};

class Game {
  constructor(str) {
    const [idString, cubeList] = str.split(":");
    const [_, id] = idString.split(" ");
    this.id = Number.parseInt(id);
    this.reveals = cubeList.trim().split(";");
  }

  isPossibleGame(rules) {
    return !this.reveals.some((reveal) => {
      const revealedCubes = {};
      reveal
        .trim()
        .split(",")
        .map((cube) => {
          const cubeValues = cube.trim().split(" ");
          return [Number.parseInt(cubeValues[0]), cubeValues[1]];
        })
        .forEach((cube) => {
          revealedCubes[cube[1]] == undefined
            ? (revealedCubes[cube[1]] = cube[0])
            : (revealedCubes[cube[1]] += cube[0]);
        });
      return Object.keys(rules).some((key) => revealedCubes[key] > rules[key]);
    });
  }
}
