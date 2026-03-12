
const results = ["PASS", "FAIL", "PASS", "FAIL", "FAIL", "PASS", "FAIL", "PASS", "FAIL", "PASS", "PASS", "FAIL", "PASS", "FAIL", "PASS"];


// const failCount = results.filter(result => result === "FAIL").length;
// const passCount = results.filter(result => result === "PASS").length;
// 
// console.log(failCount, passCount); 


let failCount = 0;
let passCount = 0;

for (let result of results) {
    if (result === "FAIL") {
        failCount++;
    }else if (result === "PASS") {
        passCount++;
    }
}

console.log("Failed Tests:", failCount);
console.log("Passed Tests:", passCount);