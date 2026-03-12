const response = {
    success: true,
    user: {
        name: "Mahbub",
        email: "mahbub@test.com",
        phone: "1234567890",
        address: "123 Main St"
    }
};

if (response.success && response.user.name && response.user.email &&
     response.user.phone && response.user.address) {
    console.log("API Response Valid");
} else {
    console.log("API Response Invalid");
}