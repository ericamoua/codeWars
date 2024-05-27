// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    //variable for placeholder
    let minNum= numbers[0];
    let maxNum= numbers[0];

// Split the input string of numbers by spaces and convert each element to a number
const numArr = numbers.split(' ').map(Number);
numArr.forEach(function(number){
  // Check if the current number is less than or equal to minNum
  // If so, update minNum to the current number
  if (minNum >= (number)) {
    minNum = number;
  // Otherwise, check if the current number is greater than or equal to maxNum
  // If so, update maxNum to the current number
  } else if (maxNum <= number) {
    maxNum = number;
  }
});
const minMax = [maxNum, minNum];
const numStr = minMax.join(' ');
return numStr;
}
//i found it difficult to be able to learn the methods for the array and breaking up the logic in the statments

//   I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears]

const humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1) {
       cat = 15;
       dog = 15;
      }
     if (humanYears === 2) {
        cat = 15 + 9;
        dog = 15 + 9;
      } 
      if (humanYears >= 3) {
        cat = 15 + 9 + ((humanYears - 2) * 4);
        dog = 15 + 9 + ((humanYears - 2) * 5);
      }
    
    
    return [humanYears,cat,dog];
  }
// It was nice to break down this block of code but it gave me a nice breakdown of the condtionals

//   Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrOdd(4));  
console.log(evenOrOdd(7));  

// with this problem i began to understand the importance of the modulus

// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:
function reverseVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelIndices = [];
    let vowelChars = [];

    // Collect indices and characters of all vowels in the string
    str.split('').forEach((char, index) => {
        if (vowels.includes(char)) {
            vowelIndices.push(index);
            vowelChars.push(char);
        }
    });

    // Reverse the array of vowels
    vowelChars.reverse();

    // Create a new array to hold the result
    let resultArr = str.split('');

    // Replace the vowels in the original string with the reversed vowels
    vowelIndices.forEach((index, i) => {
        resultArr[index] = vowelChars[i];
    });

    return resultArr.join('');
}

console.log(reverseVowels("hello"));    
console.log(reverseVowels("leetcode")); 
console.log(reverseVowels("super"));   
console.log(reverseVowels("aA"));   
// this problem was difficult for me because i had to break down the loop and using the push method 

// There is an array with some numbers. All numbers are equal except for one. Try to find it!The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // Compare the first two numbers
    if (arr[0] !== arr[1]) {
        // Check if the third number is equal to either the first or second number
        if (arr[2] === arr[0]) {
            return arr[1];
        } else {
            return arr[0];
        }
    } else {
        // Iterate through the array starting from the third element
        for (let i = 2; i < arr.length; i++) {
            // Find the number that is not equal to the first number
            if (arr[i] !== arr[0]) {
                return arr[i];
            }
        }
    }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));  
console.log(findUniq([0, 0, 0.55, 0, 0]));  

// I had a hard time understanding where to begin with this problem but i broke down the problem even more 

//return the number (count) of vowels in the given strin . Vowels include A E I O U 

function getVowel (str) {
    const  vowel = ["a", "e", "i", "o", "u"] 
    let counter = 0;
    for (let i = 0; i < vowel.length; i++) { //looping through each character in string 
        if (vowel.includes(str[i])) { //checking if the character is a vowel 
            counter++; //increment counter if it is
        }
    } 
    console.log(counter) //output count of vowels
}
getVowel("erica"); //calling the function with the output of 3


