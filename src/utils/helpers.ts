import type { Answer } from "../models/Answer";

export const checkCorrectAnswer = (correctId: number, selectedId: number) => {
  return correctId === selectedId;
};

export const getAnswerText = (answers: Answer[], id: number) => {
  return answers.find(a => a.id === id)?.text;
};

export const shuffleAnswers = (answers: Answer[]) => {
  return [...answers].sort(() => Math.random() - 0.5);
};
