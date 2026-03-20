import type { GameState } from "../models/GameState";
import ResultMessage from "./ResultMessage";
import ResultsTabel from "./ResultsTabel";

type QuizResultProps = {
  gameState: GameState;
};
function QuizResult({ gameState }: QuizResultProps) {
  return (
    <div>
      <section>
        Tulemus: {gameState.score} / {gameState.questions.length}
      </section>
      <ResultsTabel
        questions={gameState.questions}
        selectedAnswers={gameState.selectedAnswers}
      />
      <ResultMessage
        score={gameState.score}
        totalQuestions={gameState.questions.length}
      />
    </div>
  );
}

export default QuizResult;
