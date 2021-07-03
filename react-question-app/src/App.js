import React, { useState } from "react";
import "./App.css";

function App() {
  const questions = [
    {
      question: "Who is the CEO of Tesla?",
      answer: [
        {
          answerText: "Jeff Bezos",
          isCorrect: false,
        },
        {
          answerText: "Elon Mask",
          isCorrect: true,
        },
        {
          answerText: "Bill Gates",
          isCorrect: false,
        },
        {
          answerText: "Steve Jobs",
          isCorrect: false,
        },
      ],
    },
    {
      question: "What is the Capital of USA?",
      answer: [
        {
          answerText: "Washington",
          isCorrect: true,
        },
        {
          answerText: "Texas",
          isCorrect: false,
        },
        {
          answerText: "New-York",
          isCorrect: false,
        },
        {
          answerText: "Chicago",
          isCorrect: false,
        },
      ],
    },
    {
      question: "The IPhone was created by....",
      answer: [
        {
          answerText: "Apple Company",
          isCorrect: true,
        },
        {
          answerText: "Samsung",
          isCorrect: false,
        },
        {
          answerText: "Nokia",
          isCorrect: false,
        },
        {
          answerText: "Xiaomi",
          isCorrect: false,
        },
      ],
    },
    {
      question: "Who was the President of USA in 2020?",
      answer: [
        {
          answerText: "Obama",
          isCorrect: false,
        },
        {
          answerText: "Biden",
          isCorrect: false,
        },
        {
          answerText: "Trump",
          isCorrect: true,
        },
        {
          answerText: "Franklin",
          isCorrect: false,
        },
      ],
    },
  ];

  const [questionCount, setQuestion] = useState(0);
  const [currentQuiz, setQuiz] = useState(1);
  const [showResult, setResult] = useState(false);
  const [score, setScore] = useState(0);

  function handleClick(item) {
    setQuestion(questionCount + 1);
    if (questionCount > 2) {
      setResult(true);
    }

    if (item.isCorrect === true) {
      setScore(score + 1);
    }
    setQuiz(currentQuiz + 1);
  }

  return (
    <div className="App">
      {showResult === true ? (
        <div className="result">
          <h1>You scored {score} / 4 at question</h1>
        </div>
      ) : (
        <div className="quiz">
          <div className="question-title">
            <div className="count">
              <h1>Question 4 / {currentQuiz}</h1>
            </div>
            <h2>{questions[questionCount].question}</h2>
          </div>
          <div className="question-btn">
            {questions[questionCount].answer.map((item) => (
              <button onClick={() => handleClick(item)}>
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
