import type { AnswersState } from "./AnswersState";
import type { GameStatus } from "./GameStatus";
import type { Question } from "./Question";

export type GameState = {
  questions: Question[];
  answers: AnswersState;
  score: number;
  currentQuestionId: number;
  status: GameStatus;
};
