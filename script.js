$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        alert('Pesan telah dikirim!');
    });
});