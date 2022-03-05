const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', function(req, res) {
    readFile('./homepage.html', 'utf8', (err, html) => {
        if (err)
            res.status(500).send(Err);

        res.send(html);
    })

})

app.get('/detail', function(req, res) {
    readFile('./detail.html', 'utf8', (err, html) => {
        if (err)
            res.status(500).send(Err);

        res.send(html);
    })

})



app.listen(3000, () => {
    console.log('Your app is available at http://localhost:3000/');
});