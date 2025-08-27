import React from "react";
import Mainlayout from "./layouts/Mainlayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizScreen from "./pages/QuizScreen";

export default function App() {
  const pageRoute = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/quizpage/:catename",
          element: <QuizScreen />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={pageRoute} />
    </>
  );
}
