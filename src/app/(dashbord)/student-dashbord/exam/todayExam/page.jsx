"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js Router
import axios from "axios";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";

const TodaysExamsPage = () => {
  const router = useRouter(); // Router instance for navigation

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // Track if the exam is submitted
  const [alreadySubmitted, setAlreadySubmitted] = useState(false); // Track if the user has already submitted

  useEffect(() => {
    axiosPublic.get("/todayExam").then((res) => {
      setQuizQuestions(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  // Handle when an answer is selected
  const handleAnswerChange = (optionId, option) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: option, // Store the selected answer for current question
    });

    axiosPublic
      .patch(`/updateAnswer/${optionId}`, {
        answer: option,
      })
      .then((res) => {
        console.log(res);
      });
  };

  // Move to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Move to the previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Check if all questions are answered
  const allAnswered = Object.keys(answers).length === quizQuestions.length;

  // Handle the "Submit" button click
  const handleSubmit = () => {
    setSubmitted(true);
    setAlreadySubmitted(true); // Mark as already submitted
  };

  // Navigate to the result page
  const showResults = () => {
    // router.push("/student-dashbord/show-result");
  };

  if (loading) {
    return (
      <p className="flex justify-center h-screen items-center">loading ....</p>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">Today's Assessments</h1>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <FaCalendarAlt className="text-2xl text-purple-500" />
          <h2 className="text-xl font-semibold text-gray-700">
            Your Assessments for Today
          </h2>
        </div>
        <p className="text-gray-600 mb-4">
          Here are the exams, quizzes, and assignments scheduled for today. Make
          sure you're prepared!
        </p>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div className="text-gray-700 font-semibold">
              Quiz: Object-Oriented Programming
            </div>
            <div className="text-gray-500">{currentDate}</div>
          </div>
        </div>

        {/* Show Quiz Questions Only if Not Submitted */}
        {!submitted && (
          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Quiz Question {currentQuestionIndex + 1}:
            </h3>

            <div>
              <p className="text-gray-700 font-semibold">
                {quizQuestions[currentQuestionIndex]?.question}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizQuestions[currentQuestionIndex]?.options.map(
                  (option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() =>
                        handleAnswerChange(
                          quizQuestions[currentQuestionIndex]._id,
                          option
                        )
                      }
                      className={`p-3 border rounded-md text-left font-semibold ${
                        answers[currentQuestionIndex] === option
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between">
              <button
                onClick={prevQuestion}
                className="text-white bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-md mb-2 sm:mb-0"
                disabled={currentQuestionIndex === 0 || alreadySubmitted}
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
                disabled={
                  currentQuestionIndex === quizQuestions.length - 1 ||
                  alreadySubmitted
                }
              >
                Next
              </button>
            </div>

            {/* Show "Submit" button when all questions are answered */}
            {allAnswered && !submitted && !alreadySubmitted && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleSubmit}
                  className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}

        {/* Show message if already submitted */}
        {alreadySubmitted && (
          <div className="mt-6 text-center text-red-500">
            <p>You are already submitted.</p>
            <div className="mt-6 text-center">
              <Link href="/student-dashbord/exam/result">
                <button className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md">
                  Show Result
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Show "Show Result" button after submitting */}
        {submitted && !alreadySubmitted && (
          <div className="mt-6 text-center">
            <button
              onClick={showResults}
              className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md"
            >
              Show Result
            </button>
          </div>
        )}

        {/* Back to Exam Section */}
        <div className="mt-6 text-center">
          <Link href="/student-dashbord/exam">
            <button className="text-white bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md">
              Back to Exam Section
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodaysExamsPage;
