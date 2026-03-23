import type { Answer } from "../models/Answer";
import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import QuizOptions from "./QuizOptions";

type QuizCardProps = {
  currentQuestion: Question;
  selectedAnswers: AnswersState;
  onAnswerChange: (questionId: number, selectedId: number) => void;
  isCurrentAnswered: boolean;
  questionNumber: number;
  orderedAnswers: Answer[];
};

function QuizCard({
  currentQuestion,
  selectedAnswers,
  onAnswerChange,
  isCurrentAnswered,
  questionNumber,
  orderedAnswers,
}: QuizCardProps) {
  return (
    <form className="quiz-form">
      <fieldset key={currentQuestion.id} className="quiz-fieldset">
        <legend>Küsimus nr. {questionNumber + 1}</legend>

        <div className="quiz-text">{currentQuestion.text}</div>

        <div className="quiz-option-container">
          {orderedAnswers.map(answer => (
            <QuizOptions
              key={answer.id}
              answer={answer}
              answers={selectedAnswers}
              onChange={() => onAnswerChange(currentQuestion.id, answer.id)}
              id={currentQuestion.id}
              correctId={currentQuestion.correct}
              isAnswered={isCurrentAnswered}
            />
          ))}
        </div>
      </fieldset>
    </form>
  );
}

export default QuizCard;
