import styles from "./QuizStart.module.css";

type QuizStartProps = {
  start: () => void;
};

function QuizStart({ start }: QuizStartProps) {
  return (
    <div className={styles.startContainer}>
      <h2>Küsimustik</h2>
      <section>
        Pane oma teadmised proovile! Vali valikute seast üks ja õige vastus.
      </section>
      <button onClick={start}>Alusta</button>
    </div>
  );
}

export default QuizStart;
