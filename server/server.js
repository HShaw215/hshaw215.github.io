import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.resolve(__dirname, '../build')));
}

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({error: err})
})

app.listen(3000, () => console.log('Server Listening on Port 3000'))