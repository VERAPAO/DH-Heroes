const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

const pathJoin = (fileName) =>
    path.join(__dirname,`./views/${fileName}.html`);

const appGet = (rute, fileName) => app.get(`${rute}`, (req, res) => {
    res.sendFile(pathJoin(fileName))
});

app.use(express.static('public'));

appGet('/','index');
appGet('/babbage', 'babbage');
appGet('/berners-lee', 'berners-lee');
appGet('/clarke', 'clarke');
appGet('/hamilton', 'hamilton')
appGet('/hopper', 'hopper')
appGet('/lovelace', 'lovelace')
appGet('/turing', 'turing')



app.listen(port, () => {
    console.log(`localhost:${port}`)
});