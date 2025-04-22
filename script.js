// script.js
function validateForm() {
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (errorMsg) {
      errorMsg.style.display = 'none';
    });
  
    // Name validation
    const name = document.getElementById('name').value;
    if (name === '') {
      document.getElementById('name-error').textContent = 'Name is required.';
      document.getElementById('name-error').style.display = 'block';
      document.getElementById("name").style.border = "1px solid #ff0000";
      isValid = false;
    }
    else{
      document.getElementById("name").style.border = "none";
    }
  
    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      document.getElementById('email-error').textContent = 'Email is required.';
      document.getElementById('email-error').style.display = 'block';
      document.getElementById("email").style.border = "1px solid #ff0000";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email address.';
      document.getElementById('email-error').style.display = 'block';
      document.getElementById("email").style.border = "1px solid #ff0000";
      isValid = false;
    }
    else{
      document.getElementById("email").style.border = "none";
    }
  
    // Role validation
    const role = document.getElementById('role').value;
    if (role === '') {
      document.getElementById('role-error').textContent = 'Please select your role.';
      document.getElementById('role-error').style.display = 'block';
      document.getElementById("role").style.border = "1px solid #ff0000";
      isValid = false;
    }
    else{
      document.getElementById("role").style.border = "none";
    }
  
    // Recommendation validation
    const recommendation = document.querySelector('input[name="recommendation"]:checked');
    if (!recommendation) {
      document.getElementById('recommendation-error').textContent = 'Please select whether you recommend our product.';
      document.getElementById('recommendation-error').style.display = 'block';
      isValid = false;
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      return false;
    }
  
    // Show confirmation message
    document.getElementById('confirmation-message').textContent = 'Thank you for your feedback! Your submission was successful.';

    const form = document.getElementById('survey-form');
    form.reset();

    return false; // Prevent actual form submission for demo purposes
  }
  