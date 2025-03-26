"use client";

import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const reviews = [
    {
      name: "Alam Saif Sifat",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-7FCBC5",
      review:
        "Great experience! The course content was well-structured, and the instructors were highly knowledgeable. I gained a lot of practical skills that helped me in my career.",
      stars: 5,
    },
    {
      name: "Titu Khondokar",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-D48D22",
      review:
        "Very good course! I learned many useful techniques and concepts. The step-by-step guidance made it easier to understand even the complex topics.",
      stars: 5,
    },
    {
      name: "Robin Biswas",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-388F77",
      review:
        "Khubi valo! The instructors provided excellent explanations, and the hands-on projects made learning fun and engaging. Highly recommended for beginners.",
      stars: 5,
    },
    {
      name: "Nusrat Akter",
      image: "https://i.ibb.co.com/4w3gMrTd/download-7.jpg",
      id: "NA-1A2B3C",
      review:
        "Excellent course! Highly recommended. The assignments and practical tasks helped reinforce my understanding, and I now feel much more confident in my skills.",
      stars: 5,
    },
    {
      name: "Sadia Akter",
      image: "https://i.ibb.co.com/4w3gMrTd/download-7.jpg",
      id: "NA-4D5E6F",
      review:
        "Helpful and well-structured content. I loved the real-world examples, which made learning more practical. However, I would have liked more advanced topics covered.",
      stars: 4,
    },
    {
      name: "Tanvir Rahman",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-7G8H9I",
      review:
        "Good but could use more real-world projects. The fundamental concepts were covered well, but more hands-on projects would have made the learning experience even better.",
      stars: 4,
    },
    {
      name: "Jannatul Ferdous",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-9J0K1L",
      review:
        "The course exceeded my expectations! The examples were very practical, and the teaching approach was engaging. It has helped me boost my confidence in coding.",
      stars: 5,
    },
    {
      name: "Rafiq Islam",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-2M3N4O",
      review:
        "A fantastic learning experience! The interactive lessons and supportive community made it a great journey. Looking forward to more courses like this!",
      stars: 5,
    },
    {
      name: "Shamim Ahmed",
      image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
      id: "NA-5P6Q7R",
      review:
        "A well-structured course that covers all the essentials. However, I believe the course could be improved by adding more real-world case studies and projects.",
      stars: 4,
    },
  ];

  return (
    <div className="container mx-auto my-20">
      <div className="text-center mb-8">
        <h5 className="text-emerald-600 font-semibold text-sm uppercase bg-emerald-200 inline-block px-4 py-2 rounded-full mb-5">
          Review of Students
        </h5>
        <h2 className="text-3xl font-bold">
          See What Our Students Are Saying About Our Course
        </h2>
      </div>

      <Marquee gradient={false} speed={50} direction="Right">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-xl p-6 m-3 w-96 h-80 text-center border border-gray-200 ${
              index % 3 === 0 ? "bg-emerald-600 text-white" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 object-cover rounded-full border-4 border-emerald-500 shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm">ID: {review.id}</p>
              </div>
            </div>
            <p className="my-4">"{review.review}"</p>
            <div className="flex justify-center mt-3 text-yellow-500">
              {[...Array(review.stars)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Review;
