const express = require('express');
const mongoose = require('mongoose');

const app = express ();


const mongoURI = "mongodb+srv://BreezyBreon:tacobell5@cluster0-ym5rv.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance successfully');
});

mongoose.connection.on('error', (err) =>{
    console.error('Error connecting to mongo', err);
});



app.get('/', (req, res) => {
    res.send('Hi there!')
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});