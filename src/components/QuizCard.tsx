import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import QuizOptions from "./QuizOptions";

type QuizCardProps = {
  currentQuestion: Question;
  answers: AnswersState;
  onAnswerChange: (questionId: number, selectedId: number) => void;
  isCurrentAnswered: boolean;
  questionNumber: number;
};

function QuizCard({
  currentQuestion,
  answers,
  onAnswerChange,
  isCurrentAnswered,
  questionNumber,
}: QuizCardProps) {
  return (
    <form className="quiz-form">
      <fieldset key={currentQuestion.id} className="quiz-fieldset">
        <legend>Küsimus nr. {questionNumber + 1}</legend>

        <div className="quiz-text">{currentQuestion.text}</div>

        <div className="quiz-option-container">
          {currentQuestion.answers.map(answer => (
            <QuizOptions
              key={answer.id}
              answer={answer}
              answers={answers}
              onChange={() => onAnswerChange(currentQuestion.id, answer.id)}
              question={currentQuestion}
              isAnswered={isCurrentAnswered}
            />
          ))}
        </div>
      </fieldset>
    </form>
  );
}

export default QuizCard;
