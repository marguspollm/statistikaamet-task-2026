import QuizCard from "../components/QuizCard";
import QuizResult from "../components/QuizResult";
import "../styles/results.css";
import "../styles/quiz.css";
import "../styles/quiz-page.css";
import { useQuiz } from "../hooks/useQuiz";

function QuizPage() {
  const {
    gameState,
    currentQuestion,
    isCurrentAnswered,
    isLastQuestion,
    questions,
    answerQuestion,
    nextQuestion,
    start,
    end,
    restart,
    getShuffledOrder,
  } = useQuiz();

  const order = getShuffledOrder(currentQuestion.id, currentQuestion.answers);

  const orderedAnswers = order.map(
    id => currentQuestion.answers.find(a => a.id === id)!,
  );

  return (
    <div className="page-container">
      {gameState.status === "start" && (
        <div className="start-container">
          <h2>Küsimustik</h2>
          <button onClick={start}>Alusta</button>
        </div>
      )}
      {gameState.status === "inProgress" && (
        <div className="quiz-container">
          <QuizCard
            currentQuestion={currentQuestion}
            selectedAnswers={gameState.selectedAnswers}
            onAnswerChange={answerQuestion}
            isCurrentAnswered={isCurrentAnswered}
            questionNumber={gameState.currentQuestionId}
            orderedAnswers={orderedAnswers}
          />
          <button
            onClick={isLastQuestion ? end : nextQuestion}
            disabled={!isCurrentAnswered}
          >
            {isLastQuestion ? "Lõpeta küsimustik" : "Järgmine küsimus"}
          </button>
        </div>
      )}
      {gameState.status === "finished" && (
        <div className="end-container">
          <QuizResult
            score={gameState.score}
            questions={questions}
            selectedAnswers={gameState.selectedAnswers}
          />
          <button onClick={restart}>Alusta uuesti</button>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
