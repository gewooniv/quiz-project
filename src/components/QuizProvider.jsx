import QUESTIONS from ".././data/questions.js";
import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [questions, setQuestions] = useState(QUESTIONS);

  return (
    <QuizContext.Provider value={questions}>{children}</QuizContext.Provider>
  );
}

export function useQuestions() {
  return useContext(QuizContext);
}
