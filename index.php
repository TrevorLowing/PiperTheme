<?php
// Basic configuration
$config = [
    'site_title' => 'Piper Consulting Agency',
    'site_description' => 'Expert WordPress consulting and agency services with a unique \'They Live\' inspired approach'
];

// You can add any PHP logic here, like handling form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle contact form submission
    $to = "your@email.com";
    $subject = "Contact Form Submission";
    $message = $_POST['message'] ?? '';
    $headers = "From: " . ($_POST['email'] ?? '');
    
    // mail($to, $subject, $message, $headers); // Uncomment to enable email
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($config['site_title']); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($config['site_description']); ?>">
    
    <!-- React and Babel -->
    <script src="https://cdn.ezsite.ai/static/react.production.min.js"></script>
    <script src="https://cdn.ezsite.ai/static/react-dom.production.min.js"></script>
    <script src="https://cdn.ezsite.ai/static/babel.min.js"></script>
    
    <!-- Tailwind and FontAwesome -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link href="styles/global.css" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    
    <!-- Components -->
    <script type="text/babel" src="components/Navbar.js"></script>
    <script type="text/babel" src="components/Hero.js"></script>
    <script type="text/babel" src="components/Services.js"></script>
    <script type="text/babel" src="components/Portfolio.js"></script>
    <script type="text/babel" src="components/About.js"></script>
    <script type="text/babel" src="components/Contact.js"></script>
    <script type="text/babel" src="components/Footer.js"></script>
    <script type="text/babel" src="components/TheyLiveEffect.js"></script>
    
    <!-- Main App -->
    <script type="text/babel" src="js/app.js"></script>

    <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
    <script>
        // Show success message if form was submitted
        window.addEventListener('load', function() {
            alert('Thank you for your message!');
        });
    </script>
    <?php endif; ?>
</body>
</html>
