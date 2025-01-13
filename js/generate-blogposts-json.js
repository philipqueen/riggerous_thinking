const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const blogDir = path.join(__dirname, '../blogposts');
const outputFilePath = path.join(__dirname, '../blogposts.json');

fs.readdir(blogDir, (err, files) => {
    if (err) throw err;

    const posts = [];

    files.forEach(file => {
        const filePath = path.join(blogDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const $ = cheerio.load(content);

        const title = $('title').text();
        const tags = $('meta[name="tags"]').attr('content');

        posts.push({
            title: title,
            tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
            url: `/blogposts/${file}`
        });
    });

    fs.writeFileSync(outputFilePath, JSON.stringify(posts, null, 2), 'utf-8');
});