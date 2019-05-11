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

const getProductQuestions = (id, callback) => {
	// make query to mongodb to find the Product by id
	// id = Number(id);
	questions.find({ product: id}, (err, data) => {
			if (err) {
					callback(err);
			}
			// return array containing all data
			callback(data);
	});
};

const updateQuestionVote = (question_Id, body, callback) => {
	const productId = body.product;
	const vote = body.vote;
	// find productID
	questions.findById(productId, (err, doc) => {
		// iterate through the questions and find question_id
		if (err) {
			callback(err);
		}
		doc.questions.forEach(question => {

			if (question.question_id === Number(question_Id)) {
				console.log(question.votes, `VOTE`);
				question.votes = question.votes + Number(vote);
				// callback(question);
				doc.save()
				callback(doc);
			}
		});
	});
};


module.exports = {
  db,
  questions,
	getProductQuestions,
	updateQuestionVote
}