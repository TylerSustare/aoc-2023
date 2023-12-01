defmodule AdventOfCode.Day01 do
  def part1(raw_input) do
    input = parse_input_string(raw_input)
    Enum.map(input, &get_first_and_last_numbers/1) |> Enum.sum()
  end

  def part2(_raw_input) do
  end

  defp parse_input_string(input) do
    input
    |> String.split("\n")
    |> Enum.map(&String.trim/1)
    |> Enum.reject(&(&1 == ""))
  end

  defp get_first_and_last_numbers(line) do
    just_numbers = String.replace(line, ~r/\D/, "")
    first_and_last_numbers = "#{String.at(just_numbers, 0)}#{String.at(just_numbers, -1)}"
    String.to_integer(first_and_last_numbers)
  end
end
