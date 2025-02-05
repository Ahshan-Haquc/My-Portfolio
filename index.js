const express = require('express');
const app = express();
const path = require('path');

// Static files
app.use(express.static('public'));

// Port and views configuration
const port = 3000;
app.set('view engine', 'html');
app.set('views', path.resolve('./views'));


    app.get('/home', (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'mainPage.html'));
    });

app.listen(port,()=>{
    console.log("Server start......");
})