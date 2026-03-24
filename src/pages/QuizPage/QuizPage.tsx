import QuizContent from "../../components/quiz-content/QuizContent";
import QuizResult from "../../components/quiz-result/QuizResult";
import QuizStart from "../../components/quiz-start/QuizStart";
import { useQuiz } from "../../hooks/useQuiz";
import styles from "./QuizPage.module.css";

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

  const { status } = gameState;
  const order = getShuffledOrder(
    gameState.currentQuestionId,
    currentQuestion.answers,
  );
  const orderedAnswers = order.map(
    id => currentQuestion.answers.find(a => a.id === id)!,
  );

  return (
    <div className={styles.pageContainer}>
      {status === "start" && <QuizStart start={start} />}
      {status === "inProgress" && (
        <QuizContent
          gameState={gameState}
          currentQuestion={currentQuestion}
          isCurrentAnswered={isCurrentAnswered}
          isLastQuestion={isLastQuestion}
          onEnd={end}
          onNextQuestion={nextQuestion}
          onAnswerChange={answerQuestion}
          shuffledAnswers={orderedAnswers}
        />
      )}
      {status === "finished" && (
        <QuizResult
          score={gameState.score}
          questions={questions}
          selectedAnswers={gameState.selectedAnswers}
          restart={restart}
        />
      )}
    </div>
  );
}

export default QuizPage;
