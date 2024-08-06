export default function Progress({ numQuestions, index, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null ? 1:0)} />
      <p>
        Questions <strong>{index+1}</strong>/{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}
