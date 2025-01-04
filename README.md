# riggerous_thinking

[Riggerous Thinking](https://riggerousthinking.com) is a website dedicated to highline rigging. Our focus is providing technical educational content for riggers of all skill levels. We hope to cover all aspects of the sport, from rigging fundamentals to advanced techniques, with a special focus on new and previously undocumented techniques. More than anything, we hope to promote rigorous thinking in the rigging space.

## architecture

The website is a static site, meant to be as simple as possible to maintain and update, so I can focus on the content.

Primarily in HTML/CSS, there's a little client side javascript just to toggle darkmode and dynamically load the header on each page. The header is cached + versioned, to help speedup pageload times and make nice DRY development.

The blogposts are written in markdown and converted to html, which requires just a bit of hands on work. I've always wanted to make a markdown parser, so maybe someday I'll write one for this that automates the process.

I like the simple design because it has no external dependencies, and I can host it for free on GitHub Pages (at least with the current traffic).

## contributing

If you find any issues with the site, please file an issue!

If you're a slackliner and you want to contribute content, you probably already know me! Shoot me a message and we can talk, I'm definitely open to publishing other people's work as well. 

I'm also always taking suggestions for the `Resources` page.