type ResultMessageProps = {
  score: number;
  totalQuestions: number;
};

function ResultMessage({ score, totalQuestions }: ResultMessageProps) {
  const percent = (score / totalQuestions) * 100;
  const setMessage = () => {
    if (percent === 100) return "Super";
    if (percent >= 80) return "Väga hea";
    if (percent >= 50) return "Hea";
    if (percent >= 20) return "Nigel";
    if (percent > 0) return "Kahju";
    return "Proovi uuesti";
  };
  return <section className="results-message">{setMessage()}</section>;
}

export default ResultMessage;
