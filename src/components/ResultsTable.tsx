import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import { checkCorrectAnswer, getAnswerText } from "../utils/helpers";

type ResultsTableProps = {
  questions: Question[];
  selectedAnswers: AnswersState;
};

function ResultsTable({ questions, selectedAnswers }: ResultsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Küsimus</th>
          <th>Sinu vastus</th>
          <th>Õige vastus</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question: Question) => {
          const selectedAnswer = selectedAnswers[question.id];
          return (
            <tr
              key={question.id}
              className={
                checkCorrectAnswer(question.correct, selectedAnswer)
                  ? "correct"
                  : "wrong"
              }
            >
              <td>{question.text}</td>
              <td>{getAnswerText(question.answers, selectedAnswer)}</td>
              <td>{getAnswerText(question.answers, question.correct)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
