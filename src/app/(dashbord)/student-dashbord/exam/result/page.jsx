"use client";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Tick and Cross icons

const Result = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/todayExam").then((res) => {
      setResult(res.data);
      setLoading(false);
    });
  }, []);
  const totalQuestions = result.length;
  const correctAnswers = result.filter(
    (q) => q.answer === q.correctAnswer
  ).length;
  const percentage =
    totalQuestions > 0
      ? ((correctAnswers / totalQuestions) * 100).toFixed(2)
      : 0;

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }
  return (
    <div className="p-2 space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">Your Exam Result</h1>
      <div className="text-center bg-blue-100 p-3 md:p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Quiz Result</h1>
        <p className="text-gray-600 text-lg mt-2">
          Total Questions: {totalQuestions}
        </p>
        <p className="text-green-600 text-xl font-semibold mt-2">
          Correct: {correctAnswers} / {totalQuestions}
        </p>
        <p className="text-blue-500 text-xl font-bold">
          Percentage: {percentage}%
        </p>
      </div>
      <div className="bg-white p-3 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        {result.length === 0 ? (
          <p className="text-center text-gray-500">No results available.</p>
        ) : (
          <div className="space-y-4">
            {result.map((question, index) => {
              const isCorrect = question.answer === question.correctAnswer;
              return (
                <div
                  key={index}
                  className="p-4 border rounded-md bg-gray-100 shadow-sm"
                >
                  <p className="font-semibold text-gray-800">
                    {index + 1}. {question.question}
                  </p>

                  <p
                    className={`mt-2 font-medium ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Your Answer: {question.answer}
                    {isCorrect ? (
                      <FaCheckCircle className="inline ml-2 text-green-500" />
                    ) : (
                      <FaTimesCircle className="inline ml-2 text-red-500" />
                    )}
                  </p>

                  {!isCorrect && (
                    <p className="text-gray-700 mt-1">
                      ✅ Correct Answer:{" "}
                      <span className="font-semibold">
                        {question.correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
