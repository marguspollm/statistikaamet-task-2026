import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import { getAnswerText } from "../utils/helpers";

type ResultsTableProps = {
  questions: Question[];
  selectedAnswers: AnswersState;
};

function ResultsTabel({ questions, selectedAnswers }: ResultsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Küsimus</th>
          <th>Sinu vastus</th>
          <th>Õige vstus</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question: Question) => {
          return (
            <tr key={question.id}>
              <td>{question.question}</td>
              <td>
                {getAnswerText(question.answers, selectedAnswers[question.id])}
              </td>
              <td>{getAnswerText(question.answers, question.correct)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTabel;
