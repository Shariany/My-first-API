const express = require('express');

const app = express();

const PORT = 5000;

app.get('/',(request, response) => {
    response.send('Welcome to my backend server!');
});

app.listen(PORT, ()=> {
    console.log("Server is running on port" + PORT);
})