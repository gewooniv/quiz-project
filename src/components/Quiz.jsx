import { useCallback, useContext } from "react";
import { QuizContext } from "./QuizProvider.jsx";
import Summary from "./Summary.jsx";
import QuestionProgress from "./QuestionProgress.jsx";
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

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    const correctAnswer = QUESTIONS[activeQuestionIndex].answers[0];

    if (answer === correctAnswer) {
      setUserAnswers((prevState) => {
        return [
          ...prevState,
          {
            answer,
            correct: true,
          },
        ];
      });
    } else {
      setUserAnswers((prevState) => {
        return [
          ...prevState,
          {
            answer,
            correct: false,
          },
        ];
      });
    }
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  return (
    <section>
      <div id="quiz">
        <div id="question">
          <QuestionProgress timeout={7500} onTimeout={handleSkipAnswer} />
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
