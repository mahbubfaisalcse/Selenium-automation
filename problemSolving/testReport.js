// function generateTestReport(totalTests, passed, failed) {
//   return `Test Execution Summary:
// Total Tests: ${totalTests}
// Passed: ${passed}
// Failed: ${failed}`;
// }
// 
// console.log(generateTestReport(10, 8, 2));


// function generateTestReport(totalTests, passed, failed) {
//   const status = failed > 0 ? "BUILD FAILED ❌" : "BUILD PASSED ✅";
// 
//   return `Test Execution Summary:
// Total: ${totalTests}
// Passed: ${passed}
// Failed: ${failed}
// Status: ${status}`;
// }
// console.log(generateTestReport(10, 8, 0));

// Get random test ID
function generateTestID() {
    return Math.floor(Math.random() * 10000);
}

console.log("Test ID:", generateTestID());