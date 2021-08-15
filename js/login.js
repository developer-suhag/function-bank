document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-filed').value;
    const passwordField = document.getElementById('password-filed').value;

    if ((emailField == 'sm@bank.com') && (passwordField == 'secret')) {
        window.location.href = 'banking.html'
    }
})