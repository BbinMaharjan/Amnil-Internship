// Declare an employees array
const employees = [
  { name: "John Doe", grossSalary: 9500 },
  { name: "Jane Doe", grossSalary: 16500 },
  { name: "Jim Doe", grossSalary: 24999 },
  { name: "Josh Doe", grossSalary: 37000 },
];

//Calculating Net Salary
const calculateNetSalary = (grossSalary) => {
  let netSalary;
  switch (true) {
    case grossSalary <= 10000: //Tax bracket <=10000 by 2% Tax
      netSalary = grossSalary - grossSalary * 0.02;
      break;
    case grossSalary > 10000 && grossSalary <= 20000: //Tax bracket >10000 to <=20000 by 4% Tax
      netSalary = grossSalary - (10000 * 0.02 + (grossSalary - 10000) * 0.04);
      break;
    case grossSalary > 20000 && grossSalary <= 30000: //Tax bracket >20000 to <=30000 by 7% Tax
      netSalary = grossSalary - (20000 * 0.02 + (grossSalary - 20000) * 0.07);
      break;
    case grossSalary >= 30001: //Tax bracket >30000 by 10% Tax
      netSalary = grossSalary - (30000 * 0.07 + (grossSalary - 30000) * 0.1);
      break;
  }
  return netSalary;
};

// Map the employees array and output their Net Salary by calling calculateNetSalary function
employees.map((emp) => {
  console.log(
    `Name:  ${emp.name} 
    Gross Salary: ${emp.grossSalary}  
    Net Salary: ${calculateNetSalary(emp.grossSalary)}`
  );
});
