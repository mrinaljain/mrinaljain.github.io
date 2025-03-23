// import Experience from "@/components/Experiences";
// import NewspaperSection from "@/components/NewsPaperSection";
import IntroVideo from "@/components/video";
import YouTubeVideos from "@/components/YouTubeVideos";
// import Head from "next/head";
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
      {/* <Experience /> */}
      {/* <NewspaperSection /> */}
  </>
  );
}
