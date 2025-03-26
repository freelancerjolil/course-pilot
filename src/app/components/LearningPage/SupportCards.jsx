"use client";

import {
  FaHeadset,
  FaUserTie,
  FaLaptopCode,
  FaComments,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const SupportCards = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-8 mt-20">
        <h5 className="text-green-600 font-semibold text-sm uppercase bg-green-200 inline-block px-4 py-2 rounded-full mb-5">
          What's Included in the Course
        </h5>
        <h2 className="text-3xl font-bold w-3/4 mx-auto">
          Unlimited Help & Guidelines – Even Screen Sharing on Google Meet for
          Problem Solving! Join Now!
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-12">
        {/* Unlimited Support Card */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-md border border-blue-200 h-64">
          <div className="flex items-center gap-3">
            <FaHeadset className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Unlimited Support
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            We will be there for you as long as you struggle. Get answers to all
            your questions within 24 hours. On holidays, you can join{" "}
            <b>Google Meet</b> sessions to share your screen and get
            problem-solving help. You'll also receive{" "}
            <b>live one-on-one sessions</b> and <b>special guidelines</b>.
          </p>
        </div>

        {/* Basic to Job Placement */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md max-w-md border border-red-200 h-64">
          <div className="flex items-center gap-3">
            <FaUserTie className="text-red-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Basic to Job Placement
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            We ensure students complete{" "}
            <b>Data Structure, Algorithms, and Software Engineering</b> tracks
            properly. With <b>resume guidance</b> and{" "}
            <b>special interview training</b>, you can apply to{" "}
            <b>local & international companies</b>.
          </p>
        </div>

        {/* Live Project-Based Learning */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-md border border-green-200 h-64">
          <div className="flex items-center gap-3">
            <FaLaptopCode className="text-green-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Live Project-Based Learning
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Work on <b>real-world projects</b> with <b>team collaboration</b>{" "}
            and <b>mentorship</b>. Build an impressive portfolio to showcase
            your skills to recruiters.
          </p>
        </div>

        {/* Soft Skills & Communication */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md max-w-md border border-yellow-200 h-64">
          <div className="flex items-center gap-3">
            <FaComments className="text-yellow-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Soft Skills & Communication
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Master{" "}
            <b>
              interview etiquette, public speaking, and professional
              communication
            </b>
            . Improve your <b>English skills</b> to stand out in the global job
            market.
          </p>
        </div>

        {/* Mock Interviews & Resume Reviews */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md max-w-md border border-purple-200 h-64">
          <div className="flex items-center gap-3">
            <FaFileAlt className="text-purple-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Mock Interviews & Resume Reviews
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Get <b>personalized resume feedback</b> and participate in{" "}
            <b>mock interviews</b> with industry experts to boost your
            confidence before real job applications.
          </p>
        </div>

        {/* Advanced Project Building & Portfolio Guidance */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-md max-w-md border border-orange-200 h-64">
          <div className="flex items-center gap-3">
            <FaProjectDiagram className="text-orange-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Advanced Project Building & Portfolio Guidance
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Work on <b>real-world projects</b> and get expert guidance to build
            a <b>strong portfolio</b> that impresses recruiters and helps you
            land your dream job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportCards;
