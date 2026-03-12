// function validateEmail(email) {
//     return email.includes("@") && email.includes(".");
// }
// 
// console.log(validateEmail("test@mail.com"));


// validate email format
// function validateEmail(email) {
//     const atIndex = email.indexOf("@");
//     const dotIndex = email.lastIndexOf(".");
//     
//     return atIndex > 0 && dotIndex > atIndex && dotIndex < email.length - 1;
// }
// 
// console.log(validateEmail("test@mail.com"));


function validateEmail(email) {
     const atIndex = email.indexOf("@");
     const dotIndex = email.lastIndexOf(".");
     if (atIndex > 0 && dotIndex > atIndex && dotIndex < email.length - 1) {
         console.log("Valid Email");
     } else {
         console.log("Invalid Email");  
     }
}

validateEmail("faisal@gmailcom");