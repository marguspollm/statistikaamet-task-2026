import type { Answer } from "../models/Answer";
import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";

type QuizInfoProps = {
  answers: AnswersState;
  answer: Answer;
  question: Question;
  isAnswered: boolean;
  onChange: () => void;
};

function QuizInfo({
  answers,
  answer,
  question,
  isAnswered,
  onChange,
}: QuizInfoProps) {
  const isSelected = answers[question.id] === answer.id;
  const isCorrect = answer.id === question.correct;

  return (
    <div key={answer.id}>
      <input
        type="radio"
        id={`question${question.id}_answer-${answer.id}`}
        name={`question-${question.id}`}
        value={answer.text}
        checked={answers[question.id] === answer.id}
        onChange={onChange}
        disabled={isAnswered}
      />
      <label htmlFor={`question${question.id}_answer-${answer.id}`}>
        {answer.text}
        {isAnswered && !!isCorrect && "CORRECT"}
        {isAnswered && !isCorrect && isSelected && "WRONG"}
      </label>
    </div>
  );
}

export default QuizInfo;
