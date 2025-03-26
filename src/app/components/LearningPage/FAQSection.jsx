"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What are the benefits of this course?",
    answer:
      "Our course provides structured learning, hands-on projects, and unlimited support.",
  },
  {
    id: 2,
    question: "How can I enroll in the program?",
    answer:
      "Simply register on our platform, choose your course, and start learning instantly.",
  },
  {
    id: 3,
    question: "Is financial aid available?",
    answer:
      "Yes, we offer scholarships and installment plans for eligible students.",
  },
  {
    id: 4,
    question: "Is financial aid available?",
    answer:
      "Yes, we offer scholarships and installment plans for eligible students.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-10 py-20">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/Ldd8qdnR/faq-img.webp"
          alt="Student Learning"
          className="max-w-full"
        />
      </div>

      {/* Right Side - FAQ Content */}
      <div className="w-full md:w-1/2">
        <p className="text-green-500 font-semibold uppercase">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently <span className="text-yellow-500">Asked</span> Questions
        </h2>

        <div className="mt-6 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`p-4 rounded-lg border ${
                openIndex === index
                  ? "bg-orange-50 border-orange-200"
                  : "bg-gray-100 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-900 font-semibold flex items-center gap-3">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full">
                    {faq.id}
                  </span>{" "}
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronDown className="text-orange-500" />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
