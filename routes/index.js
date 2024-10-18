var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeelkumar Portfolio - 2024' });
});

// GET About page.
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// GET Projects page.
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

// GET Contact page.
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Handle contact form submission
router.post('/contact', function(req, res, next) {
  // Here, you can handle the form submission (e.g., save to database or send an email).
  res.send('Form submitted!'); // Temporary response
});

module.exports = router;
