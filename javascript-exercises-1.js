//JavaScript Exercies

//Ex:1 Start (Palindrome word or not)
String.prototype.isPalindrome = function () {
  const arrayValues = this.split(""); //converting string to an array
  const reverseArrayValue = arrayValues.reverse(); // reversing the arry values
  const reverseString = reverseArrayValue.join(""); //converting array to sting

  if (this.length == 0 || this.length == 1) {
    return "Wrong word";
  } else if (this == reverseString) {
    return true;
  } else {
    return false;
  }
};
let word1 = "level";
let word2 = "shovel";
let word3 = "b";
console.log(word1.isPalindrome());
console.log(word2.isPalindrome());
console.log(word3.isPalindrome());

//Ex:1 End

//Ex:2 Start (Cube of a number)
Number.prototype.cubeNumber = function () {
  const cube = this ** 3;
  return cube;
};
let num = 2;
console.log(num.cubeNumber());

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

//Ex:6 Start (Print Full Name and age in years and age in days)
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.age = function () {
    const oneDay = 24 * 60 * 60 * 1000;
    const now = new Date();
    const birthday = new Date(this.dob);
    const dayDiff = Math.round(Math.abs((now - birthday) / oneDay));
    const age = Math.floor(dayDiff / 365);
    const days = Math.floor(dayDiff % 365);

    return `${age} years and ${days} days old.`;
  };
}

let person = new Person("John", "Doe", "1996-03-27");
console.log(person.fullName());
console.log(person.age());

//Ex:6 End

//Ex:7 Start(Recursion of given number)
function recursion(number) {
  if (number > 0 || number < 0) {
    console.log(number);
  }
  if (number == 0) {
    return 0;
  } else {
    if (number >= 0) {
      return recursion(number - 1);
    } else {
      return recursion(number + 1);
    }
  }
}
console.log(recursion(5));
console.log(recursion(-5));

//Ex:7 End
