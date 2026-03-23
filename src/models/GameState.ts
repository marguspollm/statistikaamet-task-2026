import type { AnswersState } from "./AnswersState";
import type { GameStatus } from "./GameStatus";

export type GameState = {
  selectedAnswers: AnswersState;
  score: number;
  currentQuestionId: number;
  status: GameStatus;
  answersOrder: Record<number, number[]>;
};
