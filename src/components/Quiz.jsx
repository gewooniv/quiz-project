import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import { useQuestions } from "./QuizProvider.jsx";

export default function Quiz() {
  const questions = useQuestions();

  return (
    <section>
      {questions.map((question) => {
        return (
          <div id="quiz">
            <progress />
            <Question>{question.text}</Question>
            <div id="answers">
              {question.answers.map((answer) => {
                return <button className="answer">{answer}</button>;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
