import React from "react";
import { useParams } from "react-router-dom";

export default function QuizScreen() {
  const { catename } = useParams();
  console.log(catename);

  return <div>QuizScreen</div>;
}
