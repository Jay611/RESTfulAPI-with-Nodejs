const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./src/routes/crmRoute');

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`Nodeand express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running http://localhost:${PORT}`);
});