import type { AnswersState } from "../../models/AnswersState";
import type { Question } from "../../models/Question";
import ResultMessage from "./ResultsMessage/ResultMessage";
import ResultsTable from "./ResultsTable/ResultsTable";
import styles from "./QuizResult.module.css";

type QuizResultProps = {
  score: number;
  questions: Question[];
  selectedAnswers: AnswersState;
  restart: () => void;
};
function QuizResult({
  score,
  questions,
  selectedAnswers,
  restart,
}: QuizResultProps) {
  return (
    <div className={styles.resultsContainer}>
      <section className={styles.resultsScore}>
        Tulemus: {score}/{questions.length}
      </section>

      <section className={styles.resultsMessage}>
        <ResultMessage score={score} totalQuestions={questions.length} />
      </section>

      <ResultsTable questions={questions} selectedAnswers={selectedAnswers} />

      <button onClick={restart}>Alusta uuesti</button>
    </div>
  );
}

export default QuizResult;
