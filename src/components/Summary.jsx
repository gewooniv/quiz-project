import logoImg from ".././assets/quiz-complete.png";
import { useCallback, useContext, useEffect } from "react";
import { QuizContext } from "./QuizProvider.jsx";
import QUESTIONS from ".././data/questions.js";

export default function Summary() {
  const [userAnswers, setUserAnswers] = useContext(QuizContext);

  const totalAnswers = userAnswers.length;

  const answeredCorrectly = userAnswers
    .filter((answer) => answer.correct === true)
    .length.toFixed(0);

  const answeredIncorrectly = userAnswers
    .filter((answer) => answer.correct === false)
    .length.toFixed(0);

  return (
    <section>
      <div id="summary">
        <img src={logoImg} alt="Quiz complete" />
        <h2>Quiz complete!</h2>
        <div id="summary-stats">
          <div>
            <p className="number">{totalAnswers}</p>
            <p className="text">Answered</p>
          </div>
          <div>
            <p className="number">{answeredCorrectly}</p>
            <p className="text">Answered correctly</p>
          </div>
          <div>
            <p className="number">{answeredIncorrectly}</p>
            <p className="text">Answered incorrectly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
