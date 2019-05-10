const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();
const db = require('../server/database/schema.js')

const PORT = process.env.PORT || 3000;

// USE middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
// SERVER static files
app.use(express.static(path.join(__dirname + "/../client/dist")))


app.get('/products/:productId', (req, res) => {
  // gets all questions for specific productId
  console.log(req.params.productId,  `BODY FROM REQ`);
  db.getProductQuestions(req.params.productId, (data) => {
    res.send(data);
  });
    // res.send(`done`);
});

app.patch('api/questions/:question_id', (req, res) => {
  // modifies the votes property of a question depending on the value
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
