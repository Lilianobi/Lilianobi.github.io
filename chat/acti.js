function validateForm() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false; // Prevent form submission
    }

    alert("Message Submitted!");
    return true; // Allow form submission
}