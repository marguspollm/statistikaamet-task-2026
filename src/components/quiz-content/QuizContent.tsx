import type { Answer } from "../../models/Answer";
import type { GameState } from "../../models/GameState";
import type { Question } from "../../models/Question";
import QuizCard from "./QuizCard/QuizCard";
import styles from "./QuizContent.module.css";

type QuizContentProps = {
  gameState: GameState;
  currentQuestion: Question;
  isCurrentAnswered: boolean;
  isLastQuestion: boolean;
  shuffledAnswers: Answer[];
  onEnd: () => void;
  onNextQuestion: () => void;
  onAnswerChange: (questionId: number, selectedId: number) => void;
};

function QuizContent({
  gameState,
  currentQuestion,
  isCurrentAnswered,
  isLastQuestion,
  shuffledAnswers,
  onEnd,
  onNextQuestion,
  onAnswerChange,
}: QuizContentProps) {
  return (
    <div className={styles.quizContainer}>
      <QuizCard
        currentQuestion={currentQuestion}
        selectedAnswers={gameState.selectedAnswers}
        onAnswerChange={onAnswerChange}
        isCurrentAnswered={isCurrentAnswered}
        questionNumber={gameState.currentQuestionId}
        orderedAnswers={shuffledAnswers}
      />
      <button
        onClick={isLastQuestion ? onEnd : onNextQuestion}
        disabled={!isCurrentAnswered}
      >
        {isLastQuestion ? "Lõpeta küsimustik" : "Järgmine küsimus"}
      </button>
    </div>
  );
}

export default QuizContent;
