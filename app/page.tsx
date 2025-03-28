// import Experience from "@/components/Experiences";
// import NewspaperSection from "@/components/NewsPaperSection";
// import NewspaperSection from "@/components/NewsPaperSection";
// import SocialLinks from "@/components/SocialLinks";
import Header from "@/components/Header";
import IntroVideo from "@/components/video";
import YouTubeVideos from "@/components/YouTubeVideos";
// import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row h-screen">
        <IntroVideo />
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 text-center md:text-left bg-white">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Mrinal Jain</h1>
          <p className="mt-4 text-lg text-gray-700">Software Engineer | Tech Consultant | Full Stack Developer</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/mrinaljain/" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">Let&apos;s Connect</Link>
            <Link href="/mrinaljain_cv_feb2025.pdf" className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">Resume</Link>
          </div>
          {/* <SocialLinks /> */}
        </div>
      </section>
      <YouTubeVideos />
      {/* <Experience /> */}
      {/* <NewspaperSection /> */}
  </>
  );
}
