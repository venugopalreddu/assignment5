function validateForm() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(e) {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
            e.preventDefault();
        }
    });
}
