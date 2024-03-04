using System;

class Program
{
    const int MAX = 100;

    /// <summary>
    /// Calculates the sum of the elements in the array.
    /// </summary>
    /// <param name="arr">The array of integers.</param>
    /// <returns>The sum of the elements in the array.</returns>
    static int Sum(int[] arr)
    {
        var result = 0;
        for (var i = 0; i < arr.Length; i++)
        {
            result += arr[i];
        }
        return result;
    }

    static int ReadAndValidateInput(string prompt, int min, int max)
    {
        int value;
        do
        {
            Console.Write(prompt);
        } while (!int.TryParse(Console.ReadLine(), out value) || value < min || value > max);

        return value;
    }

    static void Main()
    {
        var n = ReadAndValidateInput("Enter the number of elements (1-100): ", 1, MAX);

        var arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (var i = 0; i < n; i++)
        {
            arr[i] = ReadAndValidateInput($"Enter integer {i+1}: ", int.MinValue, int.MaxValue);
        }

        var total = Sum(arr);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}