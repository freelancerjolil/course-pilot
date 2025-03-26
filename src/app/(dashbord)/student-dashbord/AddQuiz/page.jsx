"use client";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import { useState } from "react";

export default function QuizForm() {
  const axiosPublic = useAxiosPublic();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.quizTopic.value;

    const options = form.quizOptions.value;
    const allOptions = options.trim().split(",");
    const correctAnswer = form.correctAnswer.value;
    axiosPublic
      .post("/todayExam", {
        question: topic,
        correctAnswer,
        options: allOptions,
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          setTimeout(() => form.reset(), 500);
        }
      });
    console.log(topic, correctAnswer, options);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Quiz</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Quiz Topic"
          name="quizTopic"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Add Options"
          name="quizOptions"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Correct Answer"
          name="correctAnswer"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Quiz
        </button>
      </form>
    </div>
  );
}
