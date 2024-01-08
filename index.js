import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
app.use(express.json());

const data = {};

app.get('/', (_req, res) => {
    return res.json(data);  
});

app.post('/', (req, res) => {
    //const data = req.body;
    let aux = req.body;
    let objaux = {};
    aux.id = randomUUID();
    console.log(data);
    if(data.lenght > 0 ){
        objaux={...data, aux};
    }
    else {
        data = objaux;
    }
    data = aux;
    
    //console.log(data);
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


