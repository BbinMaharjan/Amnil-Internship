// Declare an employees array
const employees = [
  { name: "John Doe", salary: 9500 },
  { name: "Jane Doe", salary: 16500 },
  { name: "Jim Doe", salary: 24999 },
  { name: "Josh Doe", salary: 37000 },
];

//Calculating Net Salary
const calculateNetSalary = (salary) => {
  let netSalary;
  switch (true) {
    case salary <= 10000: //Tax bracket <=10000 by 2% Tax
      netSalary = salary - salary * 0.02;
      break;
    case salary > 10000 && salary <= 20000: //Tax bracket >10000 to <=20000 by 4% Tax
      netSalary = salary - (10000 * 0.02 + (salary - 10000) * 0.04);
      break;
    case salary > 20000 && salary <= 30000: //Tax bracket >20000 to <=30000 by 7% Tax
      netSalary = salary - (20000 * 0.02 + (salary - 20000) * 0.07);
      break;
    case salary >= 30001: //Tax bracket >30000 by 10% Tax
      netSalary = salary - (30000 * 0.07 + (salary - 30000) * 0.1);
      break;
  }
  return netSalary;
};

// Map the employees array and output their net salary by calling calculateNetSalary function
employees.map((emp) => {
  console.log(
    `Name:  ${emp.name} 
    Gross Salary: ${emp.salary}  
    NetSalary: ${calculateNetSalary(emp.salary)}`
  );
});
