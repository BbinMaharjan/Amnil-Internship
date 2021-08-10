//JavaScript Exercies

//Ex:1 Start (Palindrome word or not)
String.prototype.isPalindrome = function (word) {
  const arrayValues = string.split(""); //converting strinf to an array

  const reverseArrayValue = arrayValues.reverse(); // reversing the arry values

  const reverseString = reverseArrayValue.join(""); //converting array to sting

  if (string == reverseString) {
    console.log(`${word} Is Palindrome`);
  } else {
    console.log(`${word} Is Not Palindrome`);
  }
};
String.prototype.isPalindrome((string = "level"));
String.prototype.isPalindrome((string = "shovel"));
String.prototype.isPalindrome((string = "noon"));
String.prototype.isPalindrome((string = "youtube"));
//Ex:1 End

//Ex:2 Start (Cube of a number)
Number.prototype.cubeNumber = function (num) {
  const cube = num ** 3;
  console.log(`${num} cube is ${cube}`);
  return cube;
};
let num = 2;
Number.prototype.cubeNumber(num);
//Ex:2 End
