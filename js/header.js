document.addEventListener('DOMContentLoaded', () => {
    const cachedHeader = localStorage.getItem('headerHTML');
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (cachedHeader) {
        headerPlaceholder.innerHTML = cachedHeader;
    } else {
        fetch('/riggerous_thinking/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                localStorage.setItem('headerHTML', data);
            });
    }
    setupToggle();
});

function setupToggle() {
    const toggleIcon = document.getElementById('theme-toggle');
    toggleIcon.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('light-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
}