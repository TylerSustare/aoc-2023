import { expect, test } from "bun:test";
import { part1 } from "./day_02.js";

const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const sampleInput = `Game 1: 2 blue, 3 red; 3 green, 3 blue, 6 red; 4 blue, 6 red; 2 green, 2 blue, 9 red; 2 red, 4 blue
Game 2: 4 red, 1 green; 3 red; 13 green, 5 red, 3 blue; 3 green, 2 red; 3 blue, 5 red, 3 green; 2 red, 3 blue, 12 green
Game 3: 4 red, 1 green, 1 blue; 1 red, 1 blue; 6 red, 1 green; 6 red, 3 blue, 1 green; 4 red
Game 4: 4 blue, 12 red, 4 green; 6 green, 3 blue, 19 red; 3 blue, 2 red, 2 green`;

test("part 1 - test", () => {
  const result = part1(testInput);
  expect(result).toBe(8);
});
test("part 1 - sample", () => {
  const result = part1(sampleInput);
  expect(result).toBe(6);
});
