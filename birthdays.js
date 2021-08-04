// Declare an array of teammates
let people = [
  { firstName: "Bibin", lastName: "Maharjan", dob: "1996-02-02" },
  { firstName: "Aashis", lastName: "Upreti", dob: "1996-11-31" },
  { firstName: "Amresh", lastName: "Thakur", dob: "1997-03-11" },
  { firstName: "Kiran", lastName: "Ghimire", dob: "2001-11-11" },
  { firstName: "Kushal", lastName: "Bajracharya", dob: "1998-10-26" },
  { firstName: "Nitesh", lastName: "Upadhyaya", dob: "1998-07-17" },
];

// One day in milliseconds
const oneDay = 24 * 60 * 60 * 1000;

// Used map to go through people array and calculate their age in years and days and log them
people.map((p) => {
  const now = new Date();
  const birthday = new Date(p.dob); //converting to proper date format
  const dayDiff = Math.round(Math.abs((now - birthday) / oneDay)); //getting total amount of days upto now from birthday and converting into days format
  const age = Math.floor(dayDiff / 365); //converting day to years
  const days = Math.floor(dayDiff % 365);

  console.log(
    `${p.firstName + " " + p.lastName} is ${age} years and ${days} days old.`
  );
});
