import type { GameStatus } from "./GameStatus";
import type { Question } from "./Question";

export type GameState = {
  questions: Question[];
  score: number;
  currentQuestion: number;
  status: GameStatus;
};
