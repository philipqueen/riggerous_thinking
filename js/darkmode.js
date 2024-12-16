const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.documentElement.classList.add('dark-mode');
}