"use client";
// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import signinAnimation from "../../../../public/animation/login.json"; // Correct path to your animation
import Link from "next/link";
import { signIn } from "next-auth/react"; // Import NextAuth signIn function
import { RiArrowLeftUpBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import LoginButton from "@/app/auth/LoginButton";
import { Button } from "@/components/ui/button";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const SignInPage = () => {
  const [darkmode, setDarkmode] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
    // You can replace this with your authentication logic
  };

  const handleProviderSignIn = (provider) => {
    signIn(provider); // Use NextAuth to sign in via external provider
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkmode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkmode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20">
      <div className="shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row border-2">
        <button onClick={toggleTheme} variant="secondary" className="absolute">
          {darkmode ? <CiLight size={30} /> : <MdOutlineDarkMode size={30} />}
        </button>

        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Lottie
            animationData={signinAnimation}
            loop={true}
            className="w-72 h-72"
          />
        </div>

        {/* Sign In Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">
            Sign In to Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>

          {/* Sign In with Third-Party Providers */}
          <div className="mt-6 space-y-4">
            {/* <button
              onClick={() => handleProviderSignIn("facebook")}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Sign In with Facebook
            </button>
            <button
              onClick={() => handleProviderSignIn("github")}
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900"
            >
              Sign In with GitHub
            </button>
            <button
              onClick={() => handleProviderSignIn("google")}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
            >
              Sign In with Google
            </button> */}
            <LoginButton></LoginButton>
          </div>

          <p className="mt-4 text-center space-x-2">
            Don't have an account?{" "}
            <Link
              href="/Authentication/SignUp"
              className="text-blue-500 hover:underline"
            >
              Create one here
            </Link>
            <Link href={'/'}>
              <Button size="sm" variant="outline" className="cursor-pointer mt-2">
                <RiArrowLeftUpBoxLine /> Back to Home
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
