import { useQuestions } from "./QuizProvider.jsx";
import { useState } from "react";

export default function Quiz() {
  const questions = useQuestions();
  const question = questions.find((question) => question.answer === undefined);
  const [modalOpen, setModalOpen] = useState(false);

  if (!question) {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <section>
      {modalOpen && (
        <Modal open={modalOpen} onClose={handleModalClose}>
          You are done.
        </Modal>
      )}
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
