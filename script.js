function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin@123' && password === 'admin123') {
        window.location.href="https://www.youtube.com/watch?v=UZidx3258k8"
        return true; // Allow the form submission
    } else {
        alert('Invalid username or password');
        return false; // Prevent the form submission
    }
}
