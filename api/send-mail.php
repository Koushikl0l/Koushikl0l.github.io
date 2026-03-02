<?php
/**
 * Contact form handler – sends email to kushalka@clarkson.edu
 * Deploy this script on a PHP-enabled server (e.g. same domain as your portfolio or a subdomain).
 * Configure your server's mail() or use an SMTP library for production.
 */

header('Content-Type: application/json; charset=utf-8');

// Allow requests from your frontend origin (add your production URL to the array or set ALLOWED_ORIGIN env)
$allowedOrigins = ['http://localhost:5173', 'http://localhost:8080', 'http://127.0.0.1:5173', 'http://127.0.0.1:8080'];
if (getenv('ALLOWED_ORIGIN')) {
    $allowedOrigins[] = getenv('ALLOWED_ORIGIN');
}
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$to = 'kushalka@clarkson.edu';

// Accept JSON or form body
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $input = json_decode(file_get_contents('php://input'), true) ?? [];
    $name = trim((string) ($input['name'] ?? ''));
    $email = trim((string) ($input['email'] ?? ''));
    $messageBody = trim((string) ($input['message'] ?? ''));
} else {
    $name = isset($_POST['name']) ? trim((string) $_POST['name']) : '';
    $email = isset($_POST['email']) ? trim((string) $_POST['email']) : '';
    $messageBody = isset($_POST['message']) ? trim((string) $_POST['message']) : '';
}

// Basic validation
$errors = [];
if ($name === '') {
    $errors[] = 'Name is required';
}
if ($email === '') {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}
if ($messageBody === '') {
    $errors[] = 'Message is required';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode('. ', $errors)]);
    exit;
}

// Sanitize for email
$name = filter_var($name, FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$messageBody = filter_var($messageBody, FILTER_SANITIZE_SPECIAL_CHARS);

$subject = 'Portfolio contact from ' . $name;
$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$messageBody";

$headers = [
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
];
$headersString = implode("\r\n", $headers);

$sent = @mail($to, $subject, $body, $headersString);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send email. Please try again or contact directly.']);
}
