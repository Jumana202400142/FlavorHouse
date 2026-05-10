// adding function for immediate quiz feedback
function checkAnswer(answer) {
    let result = document.getElementById("quizResult");

    if(answer === 'Dough'){
        // displaying success message for quiz
        result.textContent = "Correct! Dough is the foundation of a great pizza.";
        result.style.color = "#2ecc71"; // bright green
    } else {
        // displaying error message for quiz
        result.textContent = "Oops! " + answer + " is incorrect. Try again.";
        result.style.color = "#e74c3c"; // bright red
    }
}

// adding form validation and submission handling
document.getElementById("bookingForm").addEventListener("submit", function(e){
    // preventing the page from reloading
    e.preventDefault();

    // capturing input values
    let nameInput = document.getElementById("userName").value.trim();
    let emailInput = document.getElementById("userEmail").value.trim();
    let feedback = document.getElementById("formFeedback");

    let isValid = true;

    // clearing previous feedback
    feedback.textContent = "";
    feedback.className = "form-feedback";

    // validating name field (checking if blank)
    if(nameInput === ""){
        document.getElementById("nameError").textContent = "Please enter your full name.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // validating email field (must contain @ and .)
    if(emailInput === ""){
        document.getElementById("emailError").textContent = "Email address is required.";
        isValid = false;
    } else if(!emailInput.includes("@") || !emailInput.includes(".")){
        document.getElementById("emailError").textContent = "Invalid email format. Must include '@' and '.'.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // displaying final success message inline (no alerts)
    if(isValid){
        feedback.textContent = "Thank you, " + nameInput + "! Your table is reserved.";
        feedback.className = "form-feedback success";
        
        // clearing inputs after success
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
    }
});