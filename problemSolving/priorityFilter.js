const testCases = [
  { id: 1, priority: "High" },
  { id: 2, priority: "Low" },
  { id: 3, priority: "High" }
];

const highPriorityTests = testCases.filter(
  test => test.priority === "High"
);

console.log(highPriorityTests);


// another example
const priorities = [1, 3, 2, 5, 4];

let highest = priorities[0];

for (let p of priorities) {
    if (p > highest) {
        highest = p;
    }
}

console.log("Highest Priority:", highest);