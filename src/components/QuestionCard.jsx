import React from "react";

export default function QuestionCard({
  question,
  answers,
  qnno,
  onAnswerSelect,
  selectedAnswer,
  correctAnswers = [],
}) {
  return (
    <div className="p-10 m-10 border-2 border-blue-300 rounded-lg w-[700px] bg-slate-800 shadow-2xl">
      <h1 className="text-2xl font-bold text-white text-justify">
        <span>Q.{qnno} </span>
        {question}
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-10 text-white font-bold text-xl">
        {answers.map((ans, idx) => {
          let bg = "";
          if (selectedAnswer) {
            if (correctAnswers.includes(ans)) {
              bg = "bg-green-500";
            } else if (ans === selectedAnswer) {
              bg = "bg-red-400";
            }
          }
          return (
            <div
              key={idx}
              className={`cursor-pointer hover:scale-105 p-2 rounded ${bg}`}
              onClick={() => !selectedAnswer && onAnswerSelect(ans)}>
              {ans}
            </div>
          );
        })}
      </div>
    </div>
  );
}
