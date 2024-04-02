import { useState, useContext } from "react";
import { QuizContext } from "./QuizProvider.jsx";
import Modal from "./Modal.jsx";
import QUESTIONS from ".././data/questions.js";

export default function Quiz() {
  const [modalOpen, setModalOpen] = useState(false);
  const [userAnswers, setUserAnswers] = useContext(QuizContext);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(answer) {
    setUserAnswers((prevState) => {
      return [...prevState, answer];
    });

    if (activeQuestionIndex === QUESTIONS.length - 1) {
      setModalOpen(true);
      setUserAnswers([]); // temp solution
    }
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <section>
      {modalOpen && (
        <Modal open={modalOpen} onClose={handleModalClose}>
          "Lorem ipsum betekent niets, het is een verzameling Latijnse woorden
          die een tekst vormen van nep vullen, willekeurig, plaatsaanduiding."
        </Modal>
      )}
      <div id="quiz">
        <div id="question">
          <progress />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        </div>
        <ul id="answers">
          <li className="answer">
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
              return (
                <button
                  key={answer}
                  onClick={(answer) => handleSelectAnswer(answer)}
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
