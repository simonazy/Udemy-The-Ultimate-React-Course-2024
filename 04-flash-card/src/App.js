import { useState } from "react";
import { questions } from "./data";

export default function App() {
  return <Flashcards />;
}

const Flashcards = () => {
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <Flashcard key={q.id} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

function Flashcard({ key, question, answer }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`flashcard ${selected ? "selected" : ""}`}
      onClick={() => {
        setSelected(() => !selected);
      }}
    >
      <p>{selected ? answer : question}</p>
    </div>
  );
}
