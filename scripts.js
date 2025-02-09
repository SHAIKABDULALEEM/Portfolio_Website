// Function to set dark mode
function setDarkMode(isDark) {
    const body = document.body;
    const toggleIcon = document.getElementById('toggle-icon');
    const toggle = document.getElementById('theme-toggle');

    if (isDark) {
        body.classList.add('dark-mode');
        if (toggle) toggle.checked = true;
        if (toggleIcon) toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('dark-mode');
        if (toggle) toggle.checked = false;
        if (toggleIcon) toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode); // Save the new state
    setDarkMode(!isDarkMode); // Apply the new state
}

// Check local storage for dark mode preference
function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true'; // Retrieve the saved state
    setDarkMode(darkMode); // Apply the saved state
}

// Event listener for dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('change', toggleDarkMode);
    }
    loadDarkMode(); // Load dark mode preference when the page loads
});