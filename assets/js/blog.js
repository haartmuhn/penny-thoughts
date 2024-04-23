document.addEventListener("DOMContentLoaded", function() {
    const postsList = document.getElementById('postsList');

    // Get posts from localStorage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Display posts
    function displayPosts() {
        // Get username from localStorage
        const username = localStorage.getItem('username');

        postsList.innerHTML = '';

        posts.forEach((post, index) => {
            const postItem = document.createElement('div');
            postItem.classList.add('blog-post');

            const title = document.createElement('h2');
            title.textContent = post.title;

            const content = document.createElement('p');
            content.textContent = post.content;

            const author = document.createElement('p');
            author.textContent = `Author: ${post.username || 'Unknown'}`; // Display post's username if available, otherwise default to "Unknown"

            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                deletePost(index);
            });

            postItem.appendChild(title);
            postItem.appendChild(content);
            postItem.appendChild(author);
            postItem.appendChild(deleteBtn);

            postsList.appendChild(postItem);
        });
    }

    function deletePost(index) {
        posts.splice(index, 1);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts(); // Update UI after deletion
    }

    displayPosts();
}); 
