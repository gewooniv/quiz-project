import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import { useQuestions } from "./QuizProvider.jsx";

export default function Quiz() {
  const questions = useQuestions();

  return (
    <section className="quiz">
      <div>
        {questions.map((question) => {
          return (
            <div>
              <Question>{question.text}</Question>
              {question.answers.map((answer) => {
                return <Answer>{answer}</Answer>;
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
