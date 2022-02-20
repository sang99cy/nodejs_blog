const path = require('path');
const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'resource\\public')));
//config HTTP Logger
app.use(morgan('combined'));
// template engine
app.engine('hbs', engine({ defaultLayout: 'main',extname: '.hbs' }));
app.set("views", path.join(__dirname,'resource\\views\\'));
app.set('view engine', 'hbs');
console.log('path:', path.join(__dirname,'\\resource\\views\\'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
