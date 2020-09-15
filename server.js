require('./hbs/helpers/helpers');
const hbs = require('hbs');
const express = require('express');

const { response, text } = require('express');
const port= process.env.PORT || 3000;
const app = express();


app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
hbs.registerPartials(`${ __dirname }/views/partials`);


app.listen(port);


app.get('/', (request,response)=>{
    response.render('home', {
        nombre: 'bErnardino CHIn',
        anio: new Date().getFullYear()
    })
});


app.get('/about', (request,response)=>{
    response.render('about', {
        anio: new Date().getFullYear()
    })
});


console.log(`Escuchando en el puerto ${port}`);