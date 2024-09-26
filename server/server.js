const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(require('./add'));
app.use(require('./remove'));
app.use(require('./update'));
app.use(require('./read'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
