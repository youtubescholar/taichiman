document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var email = document.getElementById('email').value;
    alert('Thank you for signing up, ' + email + '!');
});
