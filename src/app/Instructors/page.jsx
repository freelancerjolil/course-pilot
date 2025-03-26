import React from "react";
import Mentor from "../components/LearningPage/Mentor";
import Instructor from "../components/LearningPage/Instructor";
import Teacher from "../components/LearningPage/Teacher";

const page = () => {
  return (
    <div>
      <Instructor />
      <Teacher />
      <Mentor />
    </div>
  );
};

export default page;
