const student = {
  subjects: [
    { id: 1, name: "C++", marks: 80 },
    { id: 2, name: "OOP", marks: 80 },
    { id: 3, name: "Algorithms", marks: 80 },
    { id: 4, name: "Compiler", marks: 60 },
  ],
  percentage: function () {
    return (
      (this.subjects.reduce((total, subject) => total + subject.marks) /
        (this.subjects.length * 100)) *
      100
    );
  },
  isEligibleForScholarship: function () {
    return this.percentage() >= 80;
  },
};

// Find max number in array of numbers
const findMaxNumber = (numbers = []) =>
  numbers.reduce((max, number) => (max > number ? max : number));
// console.log(findMaxNumber = ([10]));

const duplicateEntry = (numbers = []) => {};
// console.log(duplicateEntry([10, 3, 42, 232, 3]));

const factorial = (number = 0) =>
  number === 1 ? 1 : number * factorial(number - 1);
// console.log(factorial(4));

// 4 = 1 * 2 * 3 * 4;
function Factorial(number = 1) {
  let fact = 1;
  while (number > 1) {
    fact = number * fact;
    number--;
  }
  console.log(fact);
}
Factorial(5);
