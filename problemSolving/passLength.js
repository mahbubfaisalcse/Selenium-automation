// check password length
// function checkPassword(password) {
//     if (password.length >= 8) {
//         console.log("Valid Password");
//     } else {
//         console.log("Password too short");
//     }
// }
// 
// checkPassword("test123eewe");


function validatePassword(password){

    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

    if(regex.test(password)){
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }

}

validatePassword("Testttt123");