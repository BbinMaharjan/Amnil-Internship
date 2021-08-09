// Declare an employees array
const employees = [
  { name: "John Doe", grossSalary: 9500 },
  { name: "Jane Doe", grossSalary: 16500 },
  { name: "Jim Doe", grossSalary: 24999 },
  { name: "Josh Doe", grossSalary: 37000 },
  { name: "Leon Hart", grossSalary: 46000 },
  { name: "Matt Dev", grossSalary: 57500 },
];

//Array Of tax bracket
const taxSlabs = [
  { gt: 0, lte: 10000, taxInPercentage: 2 },
  { gt: 10000, lte: 20000, taxInPercentage: 4 },
  { gt: 20000, lte: 30000, taxInPercentage: 7 },
  { gt: 30000, lte: 40000, taxInPercentage: 10 },
  { gt: 40000, lte: 50000, taxInPercentage: 12 },
  { gt: 50000, lte: 9999999, taxInPercentage: 15 },
];

//Calaulating Net Salary
netSalaryCalculator = (grossSalary) => {
  let remainderGrossSalary = grossSalary;
  let totalTaxAmount = 0;
  taxSlabs.forEach((slab, index) => {
    const range = slab.lte - slab.gt;
    let taxableAmt = 0;
    let taxAmount = 0;
    if (remainderGrossSalary <= range) {
      taxableAmt = remainderGrossSalary;
      remainderGrossSalary = 0;
    } else {
      taxableAmt = range;
      remainderGrossSalary = remainderGrossSalary - range;
    }
    taxAmount = taxableAmt * (slab.taxInPercentage / 100);
    totalTaxAmount += taxAmount;
  });
  return Math.ceil(totalTaxAmount);
};

employees.map((emp) => {
  console.log(
    `Name: ${emp.name} Gross Salary: ${emp.grossSalary} Net Salary: ${
      emp.grossSalary - netSalaryCalculator(emp.grossSalary)
    }`
  );
});
