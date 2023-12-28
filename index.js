import express from "express";

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    return res.send('Hello World');
});

app.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    return res.end();
});

app.put('/', (_req, res) => {
    
    return res.end('Put Request');
});

app.path('/', (_req, res) => {

    return res.end('Path Request');
});

app.delete('/', (_req, res) => {

    return res.end();
});

app.listen(3000, () =>
    console.log('Server Running'),
);


