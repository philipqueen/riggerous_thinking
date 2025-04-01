let postsData = [];
// TODO: sort posts by most recent in main view
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

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('div');
        title.className = 'card-title';
        title.innerHTML = `<a href="${post.url}">${post.title}</a>`;

        const tags = document.createElement('div');
        tags.className = 'card-tags';
        tags.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

        const date = document.createElement('div');
        date.className = 'card-date';
        date.textContent = `Published on: ${post.date}`;
        // TODO: add image to cards
        card.appendChild(title);
        card.appendChild(tags);
        card.appendChild(date);
        container.appendChild(card);
    });

    document.querySelectorAll('.tag').forEach(tagElement => {
        tagElement.addEventListener('click', function() {
            const searchInput = document.getElementById('search-input');
            searchInput.value = this.textContent;
            searchInput.dispatchEvent(new Event('input'));
        });
    });
}

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredPosts = postsData.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    displayPosts(filteredPosts);
});