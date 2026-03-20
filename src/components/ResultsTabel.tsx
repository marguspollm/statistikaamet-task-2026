import type { AnswersState } from "../models/AnswersState";
import type { Question } from "../models/Question";
import { checkCorrectAnswer, getAnswerText } from "../utils/helpers";

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
          const selectedAnswer = selectedAnswers[question.id];
          return (
            <tr
              key={question.id}
              style={{
                backgroundColor: checkCorrectAnswer(
                  question.correct,
                  selectedAnswer,
                )
                  ? "#4DC14D"
                  : "#DC1919",
              }}
            >
              <td>{question.question}</td>
              <td>{getAnswerText(question.answers, selectedAnswer)}</td>
              <td>{getAnswerText(question.answers, question.correct)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTabel;
