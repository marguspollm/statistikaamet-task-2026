import type { Answer } from "../../../models/Answer";
import type { AnswersState } from "../../../models/AnswersState";
import type { Question } from "../../../models/Question";
import QuizOption from "../QuizOption/QuizOption";
import styles from "./QuizCard.module.css";

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
    <form className={styles.quizForm}>
      <fieldset key={currentQuestion.id} className={styles.quizFieldset}>
        <legend>Küsimus nr. {questionNumber + 1}</legend>

        <div className={styles.quizText}>{currentQuestion.text}</div>

        <div className={styles.quizOptionContainer}>
          {orderedAnswers.map(answer => (
            <QuizOption
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
