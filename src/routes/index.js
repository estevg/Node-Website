const express = require('express');
const router = express.Router();


//router
router.get('/', (req, res) => {
    res.render('index.html', {
        title: 'First Website'
    })
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {
        title: 'Contact Page'
    })
});

module.exports = router;