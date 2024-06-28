document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('All fields are required');
        return;
    }

    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to home page
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const location = document.getElementById('location').value;
    const password = document.getElementById('password').value;

    if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || location === '' || password === '') {
        alert('All fields are required');
        return;
    }

    alert('Registration successful!');
    window.location.href = 'index.html'; // Redirect to home page
});

function goBack() {
    window.location.href = 'index.html';
}
