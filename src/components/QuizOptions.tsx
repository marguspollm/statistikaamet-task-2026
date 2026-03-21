import type { Answer } from "../models/Answer";
import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import ErrorIcon from "../assets/error.svg";
import SuccessIcon from "../assets/success.svg";
import RadioIcon from "../assets/radio-default.svg";

type QuizInfoProps = {
  answers: AnswersState;
  answer: Answer;
  question: Question;
  isAnswered: boolean;
  onChange: () => void;
};

function QuizOptions({
  answers,
  answer,
  question,
  isAnswered,
  onChange,
}: QuizInfoProps) {
  const isSelected = answers[question.id] === answer.id;
  const isCorrect = answer.id === question.correct;

  return (
    <div
      key={answer.id}
      className={`quiz-option 
        ${isAnswered && isCorrect ? "correct" : ""} 
        ${isAnswered && !isCorrect && isSelected ? "wrong" : ""}`}
      onClick={onChange}
    >
      <input
        type="radio"
        id={`question${question.id}_answer-${answer.id}`}
        name={`question-${question.id}`}
        value={answer.text}
        checked={answers[question.id] === answer.id}
        onChange={e => e.preventDefault()}
        disabled={isAnswered}
      />
      <label
        htmlFor={`question${question.id}_answer-${answer.id}`}
        onClick={e => e.preventDefault()}
      >
        <span className="radio-icon">
          {!isAnswered && <img src={RadioIcon} alt="radio" />}
          {isAnswered && isCorrect && <img src={SuccessIcon} alt="success" />}

          {isAnswered && isSelected && !isCorrect && (
            <img src={ErrorIcon} alt="wrong" />
          )}
          {isAnswered && !isSelected && !isCorrect && (
            <img src={RadioIcon} alt="radio" />
          )}
        </span>
        {answer.text}
      </label>
    </div>
  );
}

export default QuizOptions;
