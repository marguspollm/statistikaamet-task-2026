import type { AnswersState } from "../models/AnswersState";
import QuizInfo from "./QuizInfo";
import type { Question } from "../models/Question";

type QuizCardProps = {
  currentQuestion: Question;
  answers: AnswersState;
  onAnswerChange: (questionId: number, selectedId: number) => void;
  isCurrentAnswered: boolean;
};

function QuizCard({
  currentQuestion,
  answers,
  onAnswerChange,
  isCurrentAnswered,
}: QuizCardProps) {
  return (
    <>
      <form>
        <fieldset key={currentQuestion.id}>
          <legend>{currentQuestion.question}</legend>

          {currentQuestion.answers.map(answer => (
            <QuizInfo
              key={answer.id}
              answer={answer}
              answers={answers}
              onChange={() => onAnswerChange(currentQuestion.id, answer.id)}
              question={currentQuestion}
              isAnswered={isCurrentAnswered}
            />
          ))}
        </fieldset>
      </form>
    </>
  );
}

export default QuizCard;
