//JavaScript Exercies

//Ex:1 Start
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
