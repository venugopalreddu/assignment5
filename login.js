document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Example validation logic
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation for demonstration
    if (email && password) {
        // Call the function to show the alert
        f();
    } else {
        alert("Please fill out all fields!");
    }
});

// Function to be called on form submission
function f() {
    window.alert("Login successful");
}
