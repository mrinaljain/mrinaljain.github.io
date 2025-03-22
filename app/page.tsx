import IntroVideo from "@/components/video";
import YouTubeVideos from "@/components/YouTubeVideos";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen">
        <IntroVideo />
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 text-center md:text-left bg-white">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Mrinal Jain</h1>
          <p className="mt-4 text-lg text-gray-700">Software Engineer | Tech Consultant | Full Stack Developer</p>
          <Link href="https://www.linkedin.com/in/mrinaljain/" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">Let&apos;s Connect</Link>
        </div>
      </section>
      <YouTubeVideos />
      <div className=" flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Hero Section */}
        <div className="mt-4 space-x-4 text-center">
            <Link href="/mrinaljain_cv_feb2025.pdf" className="bg-blue-500 hover:bg-blue-600 rounded-xs px-2 py-1.5 cursor-pointer" >
            Download Resume
          </Link>
        </div>
    </div>
  </>
  );
}
