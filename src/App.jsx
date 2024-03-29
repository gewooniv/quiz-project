import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import QuizProvider from "./components/QuizProvider.jsx";

function App() {
  return (
    <QuizProvider>
      <Header />
      <Quiz />
    </QuizProvider>
  );
}

export default App;
