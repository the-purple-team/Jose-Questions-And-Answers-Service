const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuestionAndAnswers', { useNewUrlParser: true });

// const Schema = mongoose.Schema;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to mongoDB'));


const questionNAnswersSchema = mongoose.Schema({
  product: Number,
  questions: [{
    question_id: Number,
    question: String,
    answers: [
      {
        user: String,
        answer: String,
        createdAt: Date
      }
    ],
    votes: Number
  }],
});

// to use schema, it must be converted to a Model
const questions = mongoose.model('questions', questionNAnswersSchema);


module.exports = {
  db,
  questions,
  getQuestions
}