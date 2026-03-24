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

  const getSrc = () => {
    if (!isAnswered) return RadioIcon;
    if (isSelected && isCorrect) return SuccessIcon;
    if (isSelected && !isCorrect) return ErrorIcon;
    return RadioIcon;
  };
  const getAlt = () => {
    if (!isAnswered) return "radio";
    if (isSelected && isCorrect) return "success";
    if (isSelected && !isCorrect) return "wrong";
    return "radio";
  };

  const getDivBorderStyle =
    isAnswered && isSelected
      ? isCorrect
        ? "correct"
        : !isCorrect
          ? "wrong"
          : ""
      : "";

  return (
    <div
      key={answer.id}
      className={`quiz-option 
        ${getDivBorderStyle}`}
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
          <img src={getSrc()} alt={getAlt()} />
        </span>
        {answer.text}
      </label>
    </div>
  );
}

export default QuizOptions;
