import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export default function QuizProvider({ children }) {
  return (
    <QuizContext.Provider value={undefined}>{children}</QuizContext.Provider>
  );
}

// export function useAnswers() {
//   return useContext(QuizContext);
// }
