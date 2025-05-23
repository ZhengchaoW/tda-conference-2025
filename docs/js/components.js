// Utility function to load HTML components
document.addEventListener('DOMContentLoaded', function() {
  // Load all components with data-component attribute
  document.querySelectorAll('[data-component]').forEach(element => {
    const componentPath = `components/${element.getAttribute('data-component')}.html`;
    
    // Fetch the component HTML
    fetch(componentPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load component: ${componentPath}`);
        }
        return response.text();
      })
      .then(html => {
        // Insert the component HTML
        element.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading component:', error);
      });
  });
});
