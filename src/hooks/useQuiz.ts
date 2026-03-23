import { useEffect, useState } from "react";
import { questionsData } from "../data/questions";
import type { GameState } from "../models/GameState";
import { checkCorrectAnswer, shuffleAnswers } from "../utils/helpers";
import type { Answer } from "../models/Answer";

export function useQuiz() {
  const [questions] = useState(() => questionsData);

  const defaultGameState: GameState = {
    selectedAnswers: {},
    score: 0,
    currentQuestionId: 0,
    status: "start",
    answersOrder: {},
  };

  const [gameState, setGameState] = useState<GameState>(() => {
    const storage = localStorage.getItem("game");
    if (!storage) return defaultGameState;

    try {
      const storedGameState: GameState = JSON.parse(storage);
      if (storedGameState.status === "finished") return defaultGameState;
      return storedGameState;
    } catch {
      return defaultGameState;
    }
  });

  const currentQuestion = questions[gameState.currentQuestionId];

  const isLastQuestion = gameState.currentQuestionId === questions.length - 1;

  const isCurrentAnswered =
    currentQuestion &&
    gameState.selectedAnswers[currentQuestion.id] !== undefined;

  const answerQuestion = (questionId: number, selectedId: number) => {
    if (isCurrentAnswered) return;

    const newScore = checkCorrectAnswer(currentQuestion.correct, selectedId)
      ? gameState.score + 1
      : gameState.score;

    setGameState(prev => ({
      ...prev,
      score: newScore,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: selectedId,
      },
    }));
  };

  const start = () => {
    setGameState(prev => ({
      ...prev,
      status: "inProgress",
    }));
  };

  const nextQuestion = () => {
    const newQuestionId = gameState.currentQuestionId + 1;
    setGameState(prev => ({
      ...prev,
      currentQuestionId: newQuestionId,
    }));
  };

  const restart = () => {
    setGameState(defaultGameState);
    localStorage.removeItem("game");
  };

  const end = () => {
    if (!isCurrentAnswered) return;
    if (isLastQuestion) {
      setGameState(prev => ({
        ...prev,
        status: "finished",
      }));
    }
  };

  const getShuffledOrder = (questionId: number, answers: Answer[]) => {
    const existing = gameState.answersOrder[questionId];

    if (existing) return existing;

    const newOrder = shuffleAnswers(answers).map(a => a.id);

    setGameState(prev => ({
      ...prev,
      answersOrder: {
        ...prev.answersOrder,
        [questionId]: newOrder,
      },
    }));

    return newOrder;
  };

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(gameState));
  }, [gameState]);

  return {
    gameState,
    currentQuestion,
    questions,
    answerQuestion,
    nextQuestion,
    start,
    end,
    restart,
    isLastQuestion,
    isCurrentAnswered,
    getShuffledOrder,
  };
}
