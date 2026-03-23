type ResultMessageProps = {
  score: number;
  totalQuestions: number;
};

function ResultMessage({ score, totalQuestions }: ResultMessageProps) {
  const percent = (score / totalQuestions) * 100;
  const setMessage = () => {
    if (percent === 100) return "Super, tunned Eestimaad läbi ja lõhki!";
    if (percent >= 80)
      return "Väga hea, oled kahe kõrva vahele head ja paremat meelde jätnud!";
    if (percent >= 50) return "Hästi tehtud aga alati saab paremini!";
    if (percent >= 20)
      return "Pole hullu, kes see ikka jõuab kõike meelde jätta!";
    if (percent > 0) return "Tühja sest tulemusest, avastamise rõõm on suurem!";
    return "Ära pead norgu lase, proovi uuesti!";
  };
  return <section className="results-message">{setMessage()}</section>;
}

export default ResultMessage;
