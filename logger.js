app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5,6,7,8,9,10]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/course/:id', (req, res) => {
const course = courses.find(c=> c.id === parseInt(req.params.id));
if (!course) res.status(404).send('The course with the given ID was not found')
res.send(course);
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});