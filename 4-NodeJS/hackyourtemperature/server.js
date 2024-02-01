//npm init -y
//npm i express
//npm i express-handlebars
//npm i node-fetch
//add "type": "module" to package.json (to use import)

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    response.send('hello from backend to frontend!');
});

app.post('/weather', (req, res) => {
    const city = req.body.cityName;
    res.send(`You entered : ${city}`);
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
