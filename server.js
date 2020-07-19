const express = require('express');

const app = express();

app.use(express.static('./dist/insta-dp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/insta-dp/'}),
);

app.listen(process.env.PORT || 8080);

