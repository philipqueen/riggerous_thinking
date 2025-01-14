fetch('/blogposts.json')
    .then(response => response.json())
    .then(posts => {
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        const recentPosts = posts.slice(0, 5);

        const container = document.getElementById('recent-posts');
        const heading = document.createElement('h2');
        heading.textContent = 'Recent Posts';
        container.appendChild(heading);

        const list = document.createElement('ul');
        recentPosts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${post.url}">${post.title}</a>`;
            list.appendChild(listItem);
        });
        container.appendChild(list);
    })
    .catch(error => console.error('Error fetching posts:', error));
