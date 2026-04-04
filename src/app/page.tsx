
import type { Metadata } from "next";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TagList from "../components/TagList";
import IntroVideo from "../components/video";
import { LeetCodeStatsWrapper } from "../components/leetcode";
import FeaturedVideos from "../components/FeaturedVideos";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Mrinal Jain's portfolio featuring talks, videos, and software engineering experience.",
  path: "/",
  type: "website",
});

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col md:flex-row h-screen">
        <IntroVideo />
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center p-8 text-center md:text-left bg-white dark:bg-slate-950">
          <h1 className="text-4xl font-bold">Hi, I&apos;m Mrinal Jain</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">I build scalable web & mobile products used by millions.”</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/mrinaljain/" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition transform duration-150">Let&apos;s Connect</Link>
            <Link href="/resume" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition transform duration-150">Resume</Link>
          </div>
          <SocialLinks />
          <TagList />
        </div>
      </section>
      <FeaturedVideos />
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Coding Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <LeetCodeStatsWrapper />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                My Coding Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I continuously solve coding challenges on LeetCode to improve my problem-solving skills and keep up with algorithms and data structures. This helps me build better, more efficient software.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Check out my LeetCode profile to see my progress, accepted solutions, and contest participation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Experiences />
      {/* <NewspaperSection /> */}
      <Footer />
      <Link
        href="https://topmate.io/introvert_influencer"
        target="_blank"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-xl
             transition-transform hover:scale-105 z-50 flex items-center gap-2"
      >
        <span className="hidden sm:inline">Book a 1:1 Call</span>
        📞
      </Link>

    </>
  );
}
