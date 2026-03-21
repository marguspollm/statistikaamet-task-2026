import type { GameState } from "../models/GameState";
import ResultMessage from "./ResultMessage";
import ResultsTable from "./ResultsTable";

type QuizResultProps = {
  gameState: GameState;
};
function QuizResult({ gameState }: QuizResultProps) {
  return (
    <div className="results-container">
      <section className="results-score">
        Tulemus: {gameState.score}/{gameState.questions.length}
      </section>

      <section className="results-message">
        <ResultMessage
          score={gameState.score}
          totalQuestions={gameState.questions.length}
        />
      </section>

      <ResultsTable
        questions={gameState.questions}
        selectedAnswers={gameState.selectedAnswers}
      />
    </div>
  );
}

export default QuizResult;
