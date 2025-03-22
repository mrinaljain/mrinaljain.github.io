import IntroVideo from "@/components/video";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-4/5 relative">
          <IntroVideo />

          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col items-center justify-center p-8 text-center md:text-left">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Mrinal Jain</h1>
          <p className="mt-4 text-lg text-gray-700">Tech Consultant | Speaker | Community Builder</p>
          <a href="#contact" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">Let&apos;s Connect</a>
        </div>
      </section>

    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Mrinal Jain</h1>
        <p className="text-lg mt-2 text-gray-400">
          Software Engineer | Tech Consultant | Full Stack Developer
        </p>
        <div className="mt-4 space-x-4">
            <Link href="/mrinaljain_cv_feb2025.pdf" className="bg-blue-500 hover:bg-blue-600 rounded-xs px-2 py-1.5 cursor-pointer" >
            Download Resume
            </Link>
            <Link href="https://www.linkedin.com/in/mrinaljain/" className="bg-green-500 hover:bg-green-600 rounded-xs px-2 py-1.5 cursor-pointer">
            Let&apos;s Connect
            </Link>
        </div>
        </div>
    </div>
  </>
  );
}
