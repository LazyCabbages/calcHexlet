const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/download', function(req, res, next){
    res.sendFile('calc.html', {root: path.join(__dirname, 'views')})
});

app.listen(3001, function () {
    console.log('Приложение запущено и прослушивает на порту 3001');
});