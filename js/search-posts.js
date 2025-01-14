let postsData = [];

fetch('/blogposts.json')
    .then(response => response.json())
    .then(posts => {
        postsData = posts;
        displayPosts(posts);
    })
    .catch(error => console.error('Error fetching posts:', error));

function displayPosts(posts) {
    const container = document.getElementById('all-posts');
    container.innerHTML = '';

    const list = document.createElement('ul');
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${post.url}">${post.title}</a>`;
        list.appendChild(listItem);
    });
    container.appendChild(list);
}

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredPosts = postsData.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    displayPosts(filteredPosts);
});