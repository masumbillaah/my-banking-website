document.getElementById('submit-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value

    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    window.location.href = 'bank/banking.html';
});