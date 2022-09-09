const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, './src/public/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './src/view/index.html'));
});

server.listen(3000, () => {
    console.log(`* 서버가 0.0.0.0:3000에서 작동 중`);
});
