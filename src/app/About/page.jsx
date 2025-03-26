export default function About() {
  return (
    <div className="container mx-auto  min-h-[100vh] flex flex-col items-center justify-center">
      <section className="bg-gray-100 dark:bg-gray-900 py-10  px-6 lg:px-24 space-y-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About CoursePilot
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Empowering education with AI-powered learning. CoursePilot is on a
            mission to personalize learning experiences, track student progress,
            and enhance interactivity through cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🎯 AI-Powered Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Smart course recommendations, AI-driven assessments, and a 24/7 AI
              chatbot to assist learning.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              🔥 Comprehensive Course Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Live classes with Google Meet & Zoom, real-time progress tracking,
              and interactive learning dashboards.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              💡 Interactive & Engaging Features
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Gamified learning, peer-to-peer discussions, and instructor-led
              mentorship.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Join Us on This Journey 🚀
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Whether you're a student eager to learn, an educator passionate
            about teaching, or an institution looking for advanced e-learning
            solutions, CoursePilot is for you.
          </p>
          <a
            href="mailto:support@coursepilot.com"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
