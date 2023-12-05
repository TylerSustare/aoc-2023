defmodule AdventOfCode.Day01 do
  require IEx

  @string_to_digit %{
    "zero" => "0",
    "one" => "1",
    "two" => "2",
    "three" => "3",
    "four" => "4",
    "five" => "5",
    "six" => "6",
    "seven" => "7",
    "eight" => "8",
    "nine" => "9"
  }

  def part1(raw_input) do
    input = parse_input_string(raw_input)
    Enum.map(input, &get_first_and_last_numbers/1) |> Enum.sum()
  end

  def part2(raw_input) do
    input = parse_input_string(raw_input)

    Enum.map(input, &replace_number_strings_with_digits/1)
    |> Enum.map(&get_first_and_last_numbers/1)
    |> Enum.sum()
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

  defp replace_number_strings_with_digits(value) do
    chars = String.graphemes(value)

    Enum.reduce(chars, "", fn char, acc ->
      current = acc <> char

      Enum.reduce(Map.keys(@string_to_digit), current, fn number_string, accumulator ->
        {start, _stop} = find_number_string(number_string, current)

        if start != nil do
          # replace the number_string with the digit
          String.replace(current, number_string, @string_to_digit[number_string], global: false)
        else
          accumulator
        end
      end)
    end)
  end

  defp find_number_string(number_string, string) do
    case :binary.match(string, number_string) do
      :nomatch ->
        {nil, nil}

      {start, stop} ->
        {start, stop}
    end
  end
end
