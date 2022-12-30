const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Server is running...'));

app.listen(4321, () => console.log('Server is running on port 4321'));