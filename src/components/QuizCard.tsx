import { useState } from "react";
import { questionsData } from "../utils/questions";
import type { AnswersState } from "../models/AnswersState";

function QuizCard() {
  const data = questionsData;
  const [answers, setAnswers] = useState<AnswersState>({});

  const handleChange = (questionId: number, selectedId: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedId,
    }));
  };

  return (
    <>
      <form>
        {data.map(question => {
          const isAnswered = answers[question.id] !== undefined;
          return (
            <fieldset key={question.id}>
              <legend>{question.question}</legend>

              {question.answers.map(answer => {
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
                      onChange={() => handleChange(question.id, answer.id)}
                      disabled={isAnswered}
                    />
                    <label
                      htmlFor={`question${question.id}_answer-${answer.id}`}
                    >
                      {answer.text}
                      {isAnswered && !!isCorrect && "CORRECT"}
                      {isAnswered && !isCorrect && isSelected && "WRONG"}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          );
        })}
      </form>
    </>
  );
}

export default QuizCard;
