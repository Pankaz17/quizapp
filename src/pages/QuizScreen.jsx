import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

export default function QuizScreen() {
  const { catename } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currquestion, setCurrquestion] = useState("");
  const [currnNo, setCurrnNo] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const apikey = "1tUZidnWEoW17Fw1yDvKhxJVayUMfHroRWm09yRA";

  const getQuestions = async () => {
    try {
      const res = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=${apikey}&category=${catename}&difficulty=Easy&limit=10`
      );
      setQuestions(res.data);
      // console.log(res.data);
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
      setCurrnNo(1);
      setSelectedAnswer(null);
    }
  }, [questions]);
  const [result, setResult] = useState(0);

  const getNextQn = () => {
    if (currnNo < questions.length) {
      setCurrquestion(questions[currnNo]);
      setCurrnNo(currnNo + 1);
      setSelectedAnswer(null); // Reset selected answer for next question
    }
  };

  const handleAnswerSelect = (ans) => {
    setSelectedAnswer(ans);
    if (correctAnswers.includes(ans)) {
      setResult((prev) => prev + 1);
    }
  };

  const displayResult = () => {
    alert(`Your Score is ${result} out of ${questions.length}`);
    // Optionally, you can reset the quiz or navigate to another page
    setCurrnNo(1);
    setSelectedAnswer(null);
    setResult(0);
    setCurrquestion("");
    getQuestions(); // Fetch new questions from API
  };

  // Extract correct answers as an array
  const correctAnswers = currquestion.correct_answers
    ? Object.entries(currquestion.correct_answers)
        .filter(([key, value]) => value === "true")
        .map(([key]) => {
          // key is like "answer_a_correct", so get "answer_a"
          const ansKey = key.replace("_correct", "");
          return currquestion.answers[ansKey];
        })
        .filter(Boolean)
    : [];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-black mb-2 mt-5 text-3xl font-bold">
        Question {currnNo} of {questions.length}
      </div>
      {currquestion.answers &&
        Object.values(currquestion.answers).filter((ans) => ans).length > 0 && (
          <QuestionCard
            key={currquestion.id}
            question={currquestion.question}
            answers={Object.values(currquestion.answers).filter((ans) => ans)}
            qnno={currnNo}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            correctAnswers={correctAnswers}
          />
        )}
      {currnNo < questions.length ? (
        <button
          onClick={getNextQn}
          disabled={!selectedAnswer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8  rounded cursor-pointer shadow-2xl">
          Next
        </button>
      ) : (
        <button
          disabled={!selectedAnswer}
          onClick={displayResult}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8  rounded cursor-pointer shadow-2xl">
          Finish
        </button>
      )}
    </div>
  );
}
