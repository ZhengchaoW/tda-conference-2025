// Update active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
  // Wait for header component to load
  setTimeout(function() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Find all nav links
    const navLinks = document.querySelectorAll('header nav a');
    
    // Loop through links and add active class to the current page link
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      
      if (linkHref === currentPage || 
         (currentPage === 'index.html' && linkHref === 'index.html') ||
         (linkHref.includes(currentPage))) {
        link.classList.add('text-gray-900', 'font-medium');
        link.classList.remove('hover:text-gray-600');
      }
    });
  }, 100); // Small delay to ensure component has loaded
});
