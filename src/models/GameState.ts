import type { AnswersState } from "./AnswersState";
import type { GameStatus } from "./GameStatus";
import type { Question } from "./Question";

export type GameState = {
  questions: Question[];
  selectedAnswers: AnswersState;
  score: number;
  currentQuestionId: number;
  status: GameStatus;
};
