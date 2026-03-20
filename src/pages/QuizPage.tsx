import QuizCard from "../components/QuizCard";
import { questionsData } from "../utils/questions";
import type { GameState } from "../models/GameState";
import { useState } from "react";
import type { Question } from "../models/Question";
import QuizResult from "../components/QuizResult";

function QuizPage() {
  const [gameState, setGameState] = useState<GameState>({
    questions: questionsData,
    answers: {},
    score: 0,
    currentQuestionId: 1,
    status: "start",
  });
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    gameState.questions.filter(
      questions => questions.id === gameState.currentQuestionId,
    )[0],
  );

  const hasNextQuestion = currentQuestion.id < gameState.questions.length;
  const isCurrentAnswered = gameState.answers[currentQuestion.id] !== undefined;

  const handleAnswerChange = (questionId: number, selectedId: number) => {
    setGameState(prev => ({
      ...prev,
      score: checkCorrectAnswer(selectedId) ? prev.score + 1 : prev.score,
      answers: {
        ...prev.answers,
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
    setCurrentQuestion(gameState.questions[newQuestionId]);
  };

  const checkCorrectAnswer = (selectedId: number) => {
    return currentQuestion.correct === selectedId;
  };
  console.log(gameState);
  return (
    <div>
      {gameState.status === "start" && (
        <button onClick={handleStartGame}>Alusta</button>
      )}
      {gameState.status === "inProgress" && (
        <>
          <QuizCard
            currentQuestion={currentQuestion}
            answers={gameState.answers}
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
