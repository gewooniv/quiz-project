import { useContext } from "react";
import { QuizContext } from "./QuizProvider.jsx";
import Summary from "./Summary.jsx";
import QUESTIONS from ".././data/questions.js";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useContext(QuizContext);

  const activeQuestionIndex = userAnswers.length;
  const answeredAllQuestions = activeQuestionIndex === QUESTIONS.length;

  if (answeredAllQuestions) {
    return <Summary />;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  function handleSelectAnswer(answer) {
    setUserAnswers((prevState) => {
      return [...prevState, answer];
    });
    console.log(answer);
    console.log(QUESTIONS[activeQuestionIndex].answers[0]);
    if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
      console.log("correct");
    }
  }

  return (
    <section>
      <div id="quiz">
        <div id="question">
          <progress />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        </div>
        <ul id="answers">
          <li className="answer">
            {shuffledAnswers.map((answer) => {
              return (
                <button key={answer} onClick={() => handleSelectAnswer(answer)}>
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
