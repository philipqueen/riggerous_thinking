document.addEventListener('DOMContentLoaded', () => {
    const version = '1.0.2';
    const cachedVersion = localStorage.getItem('headerVersion');
    const cachedHeader = localStorage.getItem('headerHTML');
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (cachedHeader && cachedVersion === version) {
        headerPlaceholder.innerHTML = cachedHeader;
        initNavMenu();
    } else {
        fetch('/header.html?v=${version}')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                localStorage.setItem('headerHTML', data);
                localStorage.setItem('headerVersion', version);
                initNavMenu();
            });
    }
    setupToggle();
    document.dispatchEvent(new CustomEvent('headerLoaded'));
});

function initNavMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const headerContent = document.querySelector('.header-content');
    const themeIcon = document.getElementById('theme-toggle');

    if (navToggle && headerContent) {
        navToggle.addEventListener('click', function() {
            headerContent.classList.toggle('nav-open');
        });

        document.addEventListener('click', function(event) {
            const isClickOnToggle = navToggle.contains(event.target);
            if (!themeIcon) {
                isClickOnThemeIcon = false;
            } else {
                isClickOnThemeIcon = themeIcon.contains(event.target);
            }
            
            if (!isClickOnToggle && !isClickOnThemeIcon && headerContent.classList.contains('nav-open')) {
                headerContent.classList.remove('nav-open');
            }
        });
    }
}

function setupToggle() {
    const toggleIcon = document.getElementById('theme-toggle');
    if (!toggleIcon) {
        console.error('Toggle icon not found');
        return;
    }
    toggleIcon.addEventListener('click', () => {
        const isDarkMode = document.documentElement.classList.toggle('dark-mode');
        if (isDarkMode) {
            toggleIcon.classList.add('dark-mode');
            toggleIcon.classList.remove('light-mode');
        } else {
            toggleIcon.classList.add('light-mode');
            toggleIcon.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', isDarkMode);
    });
}