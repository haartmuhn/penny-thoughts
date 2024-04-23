document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleButton = document.getElementById('toggleMode');

    // Check and set the initial theme and button text
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light';
    } else {
        toggleButton.textContent = 'Dark';
    }

    // Attach click event to toggle the theme and button text
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');  // Toggle the 'dark-mode' class on the body

        if (body.classList.contains('dark-mode')) {
            this.textContent = 'Light'; // If dark mode is on, set button text to 'Light'
        } else {
            this.textContent = 'Dark'; // If dark mode is off, set button text to 'Dark'
        }
    });
});
