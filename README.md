# PHP Version of Cluesheet Project

This is a PHP-compatible version of the React-based WordPress consulting agency website.

## Setup

1. Requirements:
- PHP 7.4 or higher
- Apache web server with mod_rewrite enabled
- PHP mail function configured (optional, for contact form)

2. Installation:
- Place all files in your web server's document root or a subdirectory
- Ensure the web server has read permissions for all files
- If using Apache, the .htaccess file should be properly configured

3. Configuration:
- Edit the email address in index.php for the contact form
- Modify the $config array in index.php for site title and description
- Adjust any paths in the HTML if not serving from root directory

4. Running:
- Access through your web server (e.g., http://localhost/your-directory)
- All React components will load and run in the browser
- The contact form will be processed by PHP

## Structure

```
php-version/
├── components/     # React components
├── js/            # JavaScript files
│   └── app.js     # Main React application
├── styles/        # CSS files
├── .htaccess      # Apache configuration
├── index.php      # Main entry point
└── README.md      # This file
```

## Features

- PHP backend for form processing
- Static file serving
- React frontend with CDN dependencies
- Apache URL rewriting
- Contact form handling
