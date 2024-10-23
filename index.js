const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5,6,7,8,9,10]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;
//app.listen(3000, () => console.log(`Listening on Port 3000...`)); 
// set PORT=5000
app.listen(port, () => console.log(`Listening on port ${port}...`));