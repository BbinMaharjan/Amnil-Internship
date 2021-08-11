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

//Ex:3 Start (converting Array to Object)
let providedArray = [
  { id: 1, fullName: "John Doe" },
  { id: 2, fullName: "Jim Doe" },
  { id: 3, fullName: "Jane Doe" },
];
function reducer(accumulator, currentElement) {
  return { ...accumulator, [currentElement.id]: currentElement };
}
let newObject = providedArray.reduce(reducer, {});
console.log(newObject);
//Ex:3 End

//Ex:4 Start(converting Object to Array)
let providedObject = {
  1: { fullName: "John Doe" },
  2: { fullName: "Jim Doe" },
  3: { fullName: "Jane Doe" },
};

let newArray = Object.values(providedObject);

console.log(newArray);

//Ex:4 End

//Ex:5 Start(Finding displacement value between p1 and p2)
const points = {
  p1: [2, 3],
  p2: [6, 7],
  get displacement() {
    let displacement = Math.sqrt(
      (points.p2[0] - points.p1[0]) ** 2 + (points.p2[1] - points.p1[1]) ** 2
    );
    return displacement;
  },
};
console.log(`Value = ${points.displacement}`);
//Ex:5 End
