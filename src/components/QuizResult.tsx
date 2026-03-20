import type { GameState } from "../models/GameState";

type QuizResultProps = {
  gameState: GameState;
};
function QuizResult({ gameState }: QuizResultProps) {
  return (
    <div>
      <section>Tulemus: {gameState.score}</section>
    </div>
  );
}

export default QuizResult;
