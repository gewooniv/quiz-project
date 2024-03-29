import { useQuestions } from "./QuizProvider.jsx";

export default function Quiz() {
  const questions = useQuestions();
  const question = questions.find((question) => question.answer === undefined);

  return (
    <section>
      <div id="quiz">
        <div id="question">
          <progress />
          <h2>{question.text}</h2>
        </div>
        <ul id="answers">
          <li className="answer">
            {question.answers.map((answer) => {
              return (
                <button
                  key={Math.random()}
                  onClick={(entry) => (question.answer = entry.id)}
                >
                  {answer}
                </button>
              );
            })}
          </li>
        </ul>
      </div>
    </section>
  );
}
