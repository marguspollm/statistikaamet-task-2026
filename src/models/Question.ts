import type { Answer } from "./Answer";

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
  correct: number;
};
