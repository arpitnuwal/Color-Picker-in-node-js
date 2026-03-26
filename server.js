const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // for CSS/JS

// Routes
app.get('/', (req, res) => {
    res.render('index', { selectedColor: null });
});

app.post('/pick-color', (req, res) => {
    const color = req.body.colorPicker;
    res.render('index', { selectedColor: color });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));