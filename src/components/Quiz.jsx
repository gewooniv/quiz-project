import { useQuestions } from "./QuizProvider.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

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
      <Modal open={modalOpen} onClose={handleModalClose}>
        {modalOpen &&
          "Lorem ipsum betekent niets, het is een verzameling Latijnse woorden die een tekst vormen van nep vullen, willekeurig, plaatsaanduiding."}
      </Modal>
      <div id="quiz">
        <div id="question">
          <progress />
          <h2>{question.text}</h2>
        </div>
        <ul id="answers">
          <li className="answer">
            {question.answers.map((answer) => {
              return (
                <button key={Math.random()} onClick={() => setModalOpen(true)}>
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
