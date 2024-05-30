document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const source = document.getElementById('source').value;
    const project = document.getElementById('project').value;
    
    if (name && phone && source && project) {
        alert('Form submitted successfully!');
        // Here you can add the code to handle the form submission,
        // e.g., sending the data to a server or API.
    } else {
        alert('Please fill in all fields.');
    }
});
