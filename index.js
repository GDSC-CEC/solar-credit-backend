const express = require('express');
require('./app/utils/connection');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/user', require('./app/routes/user.routes'));
app.use('/api/product', require('./app/routes/product.route'));

app.get('/', (req, res) => res.send('Server is running...'));

app.listen(4321, () => console.log('Server is running on port 4321'));