# TDA Conference Website Component System

This website uses a simple component system to avoid duplicating code across pages for common elements like headers and footers.

## How It Works

1. Common HTML components are stored in the `/components` directory
2. The `js/components.js` script loads these components at runtime
3. HTML elements with `data-component="name"` attributes are replaced with the contents of the corresponding component file

## Adding a New Component

1. Create a new HTML file in the `/components` directory
2. Add a `<div data-component="your-component-name"></div>` to your HTML pages
3. The component will be loaded automatically when the page loads

## Modifying Components

To update elements across all pages, simply edit the component file in the `/components` directory:
- `header.html` - Navigation header that appears on all pages
- `footer.html` - Footer that appears on all pages

## Adding a New Page

To create a new page with the components system:

1. Copy the structure of an existing page
2. Include the script tag: `<script src="js/components.js"></script>`
3. Add the component placeholders:
   ```html
   <div data-component="header"></div>
   <!-- Your page content here -->
   <div data-component="footer"></div>
   ```
