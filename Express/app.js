const express = require('express');
const app = express();

const port = 8080;

const cadena = 'Hello World, como estan?';
const cadSpac = cadena.replace(/\s/g,'');
const palabras = cadena.split(' ');


app.get('/', (req, res) => {
    res.send(`<p> ${cadena} </p>`);
});
app.get('/getFrase', (req, res) => {
    res.send(`<p> ${cadena} </p>`);
});

app.get('/getLetra/:num', (req, res) => {
    const num = parseInt(req.params.num);
    
    const valNum = typeof num === 'number' && num >= 1 && num <= cadSpac.length;
    
    if (valNum) {
        res.send(`<h2> : ${cadSpac[num - 1]} </h2>`);
    } else {
        res.status(404).send('<h2> { "Has hecho una entrada incorrecta"} </h2>');
        console.log(`Error ('${req.params.num}')}`);
    }
});

app.get('/getPalabra/:num', (req, res) => {
    const number = parseInt(req.params.num);
    const valNum = typeof number === 'number' && number >= 1 && number <= palabras.length;
    
    if (valNum) {
        res.send(`<h2> Palabra: ${palabras[number - 1]} </h2>`);
    } else {
        res.status(404).send('<h2> { "Has hecho una entrada incorrecta"} </h2>');
        console.log(`Error ('${req.params.num}')}`);
    }
});


app.listen(port, () => console.log(`Escuchando en puerto: ${port}`));
