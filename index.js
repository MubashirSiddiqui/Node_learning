const express = require('express');
const app = express();

app.use(express.json());


const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
    {id:4, name: 'course4'},
    {id:5, name: 'course5'},
    {id:6, name: 'course6'}
];

app.post('/api/courses', (req, res) => {
    console.log(req.body);  // Log the incoming request body to debug//
    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


//PORT
const port = process.env.PORT || 3000;
//app.listen(3000, () => console.log(`Listening on Port 3000...`)); 
// set PORT=5000
app.listen(port, () => console.log(`Listening on port ${port}...`));

 