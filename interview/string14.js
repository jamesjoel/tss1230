/*
How do you reverse a string?
How do you determine if a string is a palindrome?
How do you calculate the number of numerical digits in a string?
How do you find the count for the occurrence of a particular character in a string?
How do you find the non-matching characters in a string?
How do you find out if the two given strings are anagrams?
How do you calculate the number of vowels and consonants in a string?
How do you total all of the matching integer elements in an array?
How do you reverse an array?
How do you find the maximum element in an array?
How do you sort an array of integers in ascending order?
How do you print a Fibonacci sequence using recursion?
How do you calculate the sum of two integers?
How do you find the average of numbers in a list?
How do you check if an integer is even or odd?

*/
var arr = [4, 10, 18, 9, 15, 3, 4, 7, 2];
// [3, 10, 18, 9, 15, 4, 7, 2]
// [3, 10, 18, ]

for(var i = 0; i < arr.length; i++)
{
    for(var j = i+1; j < arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            let x = arr[j];
            arr[j] = arr[i];
            arr[i] = x;
        }
    }
}

console.log(arr);
