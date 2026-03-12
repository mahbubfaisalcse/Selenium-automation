// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(number) {
//     let fac = 1;
//     for (let i = 2; i <= number; i++){
//         fac = fac * i;    
//     }
//     
//     console.log(`Factorial for ${number} is: ${fac}`);
//     
// }
// 
// factorial(5);

function factorial(number) {
    let fac = 1;

    for (let i = 2; i <= number; i++) {
        fac = fac * i;
    }

    return fac;
}

console.log(factorial(5));