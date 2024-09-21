document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from submitting normally

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!'); // Alert if passwords don't match
        return;  // Exit the function if passwords do not match
    }

    // Call the fp function for further validation and completion message
    fp(name, email, password, confirmPassword);

    // Create a user object for temporary storage
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Store user data temporarily in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Reset the form after successful registration
    document.getElementById('regForm').reset();
});

// Function to check if all fields are filled
function fp(name, email, password, confirmPassword) {
    if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
        alert("Registration complete!");
    } else {
        alert("Please fill out all fields!");
    }
}
