// Add any JavaScript interactions here.
// Examples:
// - Mobile menu toggle
// - Form validation
// - Simple animations
// - Filtering projects

console.log("Portfolio script loaded.");

// Example: Mobile Menu Toggle (Very Basic - you'd need a menu button in HTML)
/*
const navToggle = document.querySelector('.nav-toggle-button'); // Add this button to your HTML nav
const navLinks = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        // You'd likely want to toggle a class instead for better CSS control
    });
}
*/

// Example: Smooth scroll for internal links (like project links from homepage)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is pointing to the current page
        const targetPath = this.href.split('#')[0];
        const currentPath = window.location.origin + window.location.pathname;

        // Only prevent default if it's an internal link on the *same* page
        if (targetPath === currentPath || targetPath === '') {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // Otherwise, let the default link behavior happen (navigate to another page)
    });
});
