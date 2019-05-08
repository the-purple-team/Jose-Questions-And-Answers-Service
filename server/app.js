const express = require('express');
const bodyParser = require('body-parser');



const app = express();
const PORT = 3000;


app.get('/questions/:productId', (req, res) => {
  // gets all questions for specific productId
});

app.post('/questions/add', (req, res) => {
  // creates a question and adds to productID
});

app.patch('/questions/votes/:productId', (req, res) => {
  // modifies the votes property of a question depending on the value

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
