document.addEventListener('DOMContentLoaded', () => {
    const cachedHeader = localStorage.getItem('headerHTML');
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (cachedHeader) {
        headerPlaceholder.innerHTML = cachedHeader;
    } else {
        fetch('/header.html')
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
    if (!toggleIcon) {
        console.error('Toggle icon not found');
        return;
    }
    toggleIcon.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('dark-mode');
        toggleIcon.classList.toggle('light-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });
}