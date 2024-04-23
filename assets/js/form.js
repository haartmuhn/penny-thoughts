function toggleMode() {
    var body = document.body;
    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');
    
    var button = document.querySelector('.toggle-button');
    // Change button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        button.textContent = "Light";
    } else {
        button.textContent = "Dark";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('blogForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Check if any field is empty
        if (!username || !title || !content) {
            alert('Please complete all fields.');
            return;
        }

        // Create blog post object
        const blogPost = {
            username: username,
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
        };

        // Get existing posts from localStorage or create empty array
        let posts = JSON.parse(localStorage.getItem('posts')) || [];

        // Add new post to the array
        posts.unshift(blogPost);

        // Update localStorage with new posts array
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to posts page
        window.location.href = 'blog.html';
    });
});
