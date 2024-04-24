document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');

    button.addEventListener('click', function() {
        if(this.textContent === 'Click me') {
            this.textContent = 'Thank you';
        }
    })
})