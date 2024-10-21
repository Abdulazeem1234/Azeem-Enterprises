document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('confirmationMessage').innerText = `Thank you, ${name}. We have received your message and will get back to you soon.`;
    } else {
        alert('Please fill out all fields.');
    }
});
