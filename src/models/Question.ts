import type { Answer } from "./Answer";

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
  correct: number;
};
