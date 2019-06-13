const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const app = express();
const db = require("../server/database/schema.js");
const cors = require('cors');


const PORT = process.env.PORT || 3000;

// USE middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
// SERVER static files
app.use(express.static(path.join(__dirname + "/../client/dist")));

//allows to serve react files whenever the url Route is changed in the client side.
app.use("/products/:id", express.static(path.join(__dirname + "/../client/dist")));

app.get("/questions/product/:productId", (req, res) => {
  // gets all questions for specific productId
  db.getProductQuestions(req.params.productId, data => {
    res.send(data);
  });
});

app.post("/ask/vote/question/:question_id", (req, res) => {
  // modifies the votes property of a question depending on the value
  //    click value must have products/:productId
  // the body will have the productId & vote value
  const question_Id = req.params.question_id;
  console.log(req.body, `server - LINE 36`);
  db.updateQuestionVote(question_Id, req.body, data => {
    res.send(data);
  });
  // console.log(req.body, `BODY`)
  // res.send(`RECEIVED RESPONSE`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
