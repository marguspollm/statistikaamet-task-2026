import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import ResultMessage from "./ResultMessage";
import ResultsTable from "./ResultsTable";

type QuizResultProps = {
  score: number;
  questions: Question[];
  selectedAnswers: AnswersState;
};
function QuizResult({ score, questions, selectedAnswers }: QuizResultProps) {
  return (
    <div className="results-container">
      <section className="results-score">
        Tulemus: {score}/{questions.length}
      </section>

      <section className="results-message">
        <ResultMessage score={score} totalQuestions={questions.length} />
      </section>

      <ResultsTable questions={questions} selectedAnswers={selectedAnswers} />
    </div>
  );
}

export default QuizResult;
