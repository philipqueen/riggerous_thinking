const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.documentElement.classList.add('dark-mode');
    toggleIcon.classList.remove('light-mode');
} else {
    toggleIcon.classList.add('light-mode');
    toggleIcon.classList.remove('dark-mode');
}
