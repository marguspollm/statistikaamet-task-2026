import QuizCard from "../components/QuizCard";
import { questionsData } from "../utils/questions";
import type { GameState } from "../models/GameState";
import { useState } from "react";
import type { Question } from "../models/Question";
import QuizResult from "../components/QuizResult";
import { checkCorrectAnswer, shuffleAnswers } from "../utils/helpers";

function QuizPage() {
  const [gameState, setGameState] = useState<GameState>(() => ({
    questions: questionsData.map(question => ({
      ...question,
      answers: shuffleAnswers(question.answers),
    })),
    selectedAnswers: {},
    score: 0,
    currentQuestionId: 1,
    status: "start",
  }));
  const currentQuestion: Question = gameState.questions.filter(
    question => question.id === gameState.currentQuestionId,
  )[0];

  const hasNextQuestion = currentQuestion.id < gameState.questions.length;
  const isCurrentAnswered =
    gameState.selectedAnswers[currentQuestion.id] !== undefined;

  const handleAnswerChange = (questionId: number, selectedId: number) => {
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

    if (!hasNextQuestion) {
      setGameState(prev => ({
        ...prev,
        status: "finished",
      }));
      return;
    }
  };

  const handleStartGame = () => {
    setGameState(prev => ({
      ...prev,
      status: "inProgress",
    }));
  };

  const handleNextQuestion = () => {
    if (!hasNextQuestion) return;

    const newQuestionId = gameState.currentQuestionId + 1;
    setGameState(prev => ({
      ...prev,
      currentQuestionId: newQuestionId,
    }));
  };

  return (
    <div>
      {gameState.status === "start" && (
        <button onClick={handleStartGame}>Alusta</button>
      )}
      {gameState.status === "inProgress" && (
        <>
          <QuizCard
            currentQuestion={currentQuestion}
            answers={gameState.selectedAnswers}
            onAnswerChange={handleAnswerChange}
            isCurrentAnswered={isCurrentAnswered}
          />
          {hasNextQuestion && isCurrentAnswered && (
            <button onClick={handleNextQuestion}>Järgmine küsimus</button>
          )}
        </>
      )}
      {gameState.status === "finished" && <QuizResult gameState={gameState} />}
    </div>
  );
}

export default QuizPage;
