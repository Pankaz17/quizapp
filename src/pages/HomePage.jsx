import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const categ = [
    {
      id: 1,
      title: "HTML",
      text: "html",
    },
    {
      id: 2,
      title: "DJANGO",
      text: "djangoframework",
    },
    {
      id: 3,
      title: "JavaScript",
      text: "JavaScript",
    },
    {
      id: 4,
      title: "React JS",
      text: "react",
    },
    {
      id: 5,
      title: "Linux",
      text: "linux",
    },
    {
      id: 6,
      title: "Python",
      text: "python",
    },
  ];
  return (
    <div>
      <h1 className="text-center mt-5 text-5xl font-bold font-serif">
        Select Category
      </h1>
      <div className="grid grid-cols-3 gap-5 mt-10 ">
        {categ.map((cat) => {
          return (
            <Link to={`/quizpage/${cat.text}`} key={cat.id}>
              <div
                key={cat.id}
                className="border-2 border-black m-10 p-10 text-center text-3xl font-semibold hover:bg-slate-300 cursor-pointer rounded-md">
                <h1>{cat.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
