document.addEventListener('headerLoaded', () => {
    let isDarkMode = localStorage.getItem('darkMode');

    if (isDarkMode === null) {
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
        isDarkMode = isDarkMode === 'true';
    }
    const toggleIcon = document.getElementById('theme-toggle');
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode')
        toggleIcon.classList.add('dark-mode');
        toggleIcon.classList.remove('light-mode');
    } else {
        toggleIcon.classList.add('light-mode');
        toggleIcon.classList.remove('dark-mode');
    }
});
