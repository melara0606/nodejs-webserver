const path = require('path')
const hbs = require('hbs')
const express = require('express')

const app = express()

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static( path.join(__dirname, '/public') ))
hbs.registerPartials(path.join(__dirname, '/views/parciales'))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
  res.render('home', {
    name: 'edwin melara landaverde',
    year: 2018
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    
  })
})

app.listen(port, () => {
  console.log('Estamos corriendo en el puerto 3000');
})