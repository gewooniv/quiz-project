import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import Summary from "./components/Summary.jsx";
import QuizProvider from "./components/QuizProvider.jsx";

function App() {
  return (
    <QuizProvider>
      <Header />
      <Quiz />
      <Summary />
    </QuizProvider>
  );
}

export default App;
