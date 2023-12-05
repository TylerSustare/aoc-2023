import { expect, test } from "bun:test";
import { part1 } from "./day_04.js";

const testInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const sampleInput = `Card   1: 77 45  9 81 96  5 91  3 66 76 |  7 56 66 49 96 58 54 34 37  5 14 85 45 91  9 22 81 50 88 77 76  3 83 93 18
Card   2: 41 49 12 46 39  9 72 78 24 76 |  3 28 60 82  2 26 67 75 37 72 64 46 54 13 85 20 10  9 18 99 58  4 57 80 25
Card   3: 26 93 49 51 21 50 33 69 73 28 | 64 18 76 80 65 89 78 38 37 75 14 91 44 72 94 55 86 98  2  7 99 67 57 93 46
Card   4: 75 85 30 17 82 27 51 28 94 90 |  2  6  1 83 65 21 30 70 22 91 11 26 47 95 59 96 89 49  5 16 29 55 64 69 23
Card   5: 95 59 90 56 69 67 12 57  6 68 | 61 52 76 69 67 40 31 56 55 90 12 68 32 66  2 95 29  6 22 91 70 35 57 81 59`;

test("part 1 - test", () => {
  const result = part1(testInput);
  expect(result).toBe(13);
});
test("part 1 - sample", () => {
  const result = part1(sampleInput);
  expect(result).toBe(1030);
});