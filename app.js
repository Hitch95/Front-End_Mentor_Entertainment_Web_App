// Imports
const express = require('express');
const app = express();
const port = 5000;

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css/style.css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('view engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html_files/home.html');
})
app.get('/sign-up', (req, res) => {
    res.sendFile(__dirname + '/sign-up.html');
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})


app.listen(port, () => console.info(`App listening on port ${port}`));

