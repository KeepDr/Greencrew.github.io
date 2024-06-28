function validateForm() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const location = document.getElementById('location').value;
    const password = document.getElementById('password').value;

    if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || location === '' || password === '') {
        alert('All fields are required');
        return false;
    }

    // If all conditions are met, redirect to the homepage
    alert('Registration successful!');
    window.location.href = 'index.html';
}

function goBack() {
    window.location.href = 'index.html';
}