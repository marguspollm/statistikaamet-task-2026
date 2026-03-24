import type { Answer } from "../models/Answer";
import type { AnswersState } from "../models/AnswersState";
import ErrorIcon from "../assets/error.svg";
import SuccessIcon from "../assets/success.svg";
import RadioIcon from "../assets/radio-default.svg";

type QuizInfoProps = {
  answers: AnswersState;
  answer: Answer;
  id: number;
  correctId: number;
  isAnswered: boolean;
  onChange: () => void;
};

function QuizOptions({
  answers,
  answer,
  id,
  correctId,
  isAnswered,
  onChange,
}: QuizInfoProps) {
  const isSelected = answers[id] === answer.id;
  const isCorrect = answer.id === correctId;

  return (
    <div
      key={answer.id}
      className={`quiz-option 
        ${isAnswered && isCorrect && isSelected ? "correct" : ""} 
        ${isAnswered && !isCorrect && isSelected ? "wrong" : ""}`}
      onClick={onChange}
      data-testid="answer-option"
    >
      <input
        type="radio"
        id={`question-${id}_answer-${answer.id}`}
        name={`question-${id}`}
        value={answer.text}
        checked={answers[id] === answer.id}
        onChange={e => e.preventDefault()}
        disabled={isAnswered}
      />
      <label
        htmlFor={`question-${id}_answer-${answer.id}`}
        onClick={e => e.preventDefault()}
      >
        <span className="radio-icon">
          {!isAnswered && <img src={RadioIcon} alt="radio" />}
          {isAnswered && isSelected && isCorrect && (
            <img src={SuccessIcon} alt="success" />
          )}

          {isAnswered && isSelected && !isCorrect && (
            <img src={ErrorIcon} alt="wrong" />
          )}
          {isAnswered && !isSelected && <img src={RadioIcon} alt="radio" />}
        </span>
        {answer.text}
      </label>
    </div>
  );
}

export default QuizOptions;
