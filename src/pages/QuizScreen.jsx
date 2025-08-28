import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QuizScreen() {
  const { catename } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currquestion, setCurrquestion] = useState("");

  const apikey = "1tUZidnWEoW17Fw1yDvKhxJVayUMfHroRWm09yRA";

  const getQuestions = async () => {
    try {
      const res = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=${apikey}&category=${catename}&difficulty=Easy&limit=10`
      );
      setQuestions(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getQuestions();
  }, [catename]);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrquestion(questions[0]);
    }
  }, [questions]);

  console.log(currquestion);

  return (
    <div>
      <h1>Q.1 {currquestion.question}</h1>
      <div className="grid grid-cols-2 gap-5 mt-10 ">
        {currquestion.answers &&
          Object.values(currquestion.answers)
            .filter((ans) => ans) // filter out null answers
            .map((ans, idx) => <div key={idx}>{ans}</div>)}
      </div>
    </div>
  );
}
