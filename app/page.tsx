import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Mrinal Jain</h1>
        <p className="text-lg mt-2 text-gray-400">
          Software Engineer | Tech Consultant | Full Stack Developer
        </p>
        <div className="mt-4 space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-xs px-2 py-1.5 cursor-pointer">
            Download Resume
          </button>
          <button className="bg-green-500 hover:bg-green-600 rounded-xs px-2 py-1.5 cursor-pointer">
            Let&apos;s Connect
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-2xl text-center mt-10">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-400 mt-2">
          I’m a software engineer with 7+ years of experience, specializing in
          React, Flutter, and Node.js. Passionate about building scalable,
          high-performance applications for OTT and B2C platforms.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-10">
        <a href="#" className="text-gray-400 hover:text-white text-2xl">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-2xl">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
