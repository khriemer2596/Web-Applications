import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

const interval = 10
let callCount = 0

app.use('/random-person', (req, res, next) => {
    callCount = callCount + 1

    if (callCount % interval === 0) {
        console.log(`The list is ${callCount} entries long.`)
    }

    next()

});

app.get('/random-person', asyncHandler(async (req, res) => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    res.send(data)
}));

app.use((err, req, res, next) => {
    console.log(`Unhandled error ${err}. URL = ${req.originalUrl}, method = ${req.method} `)
    res.send('500 - Server Error')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
