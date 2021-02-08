const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Nodeand express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running http://localhost:${PORT}`);
});