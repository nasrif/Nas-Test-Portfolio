const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    // console.log('Event fired');
    event.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '' ) {
        alert ('Please fill in all fields')
        return 
    }
})
