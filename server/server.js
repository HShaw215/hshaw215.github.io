import express from 'express';
import path from 'path';

const app = express();

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.resolve(__dirname, '../build')));
}

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({error: err})
})

app.listen(3000, () => console.log('Server Listening on Port 3000'))