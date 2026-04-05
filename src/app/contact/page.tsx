import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "@/components/contact/ContactForm";

const socialWays = [
  {
    label: "LinkedIn",
    handle: "mrinaljain",
    href: "https://www.linkedin.com/in/mrinaljain",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    handle: "mrinaljain",
    href: "https://github.com/mrinaljain",
    icon: FaGithub,
  },
  {
    label: "Twitter / X",
    handle: "_mrinaljain",
    href: "https://twitter.com/_mrinaljain",
    icon: FaTwitter,
  },
  {
    label: "YouTube",
    handle: "@introvertinfluencer",
    href: "https://www.youtube.com/@introvertinfluencer",
    icon: FaYoutube,
  },
  {
    label: "Facebook",
    handle: "TheIntrovertInfluencer",
    href: "https://www.facebook.com/TheIntrovertInfluencer/",
    icon: FaFacebook,
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-teal-50 px-6 py-16 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-600/20" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-700/20" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-900 dark:border-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-200">
            Contact Mrinal
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Let&apos;s collaborate, build, and grow together
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 md:text-lg">
            Reach out for consulting, speaking, mentorship, product strategy, and partnerships.
            You can connect on social platforms, schedule directly on Topmate, or submit the form
            below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 lg:col-span-2">
            <h2 className="text-xl font-bold">Social Media</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              All available social channels to connect with Mrinal.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {socialWays.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-cyan-600 dark:hover:bg-cyan-900/20"
                  >
                    <span className="rounded-lg bg-white p-2 text-cyan-700 shadow-sm dark:bg-slate-900 dark:text-cyan-300">
                      <Icon aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{label}</span>
                      <span className="block text-xs text-slate-600 dark:text-slate-400">
                        {handle}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-6 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
            <div>
              <h2 className="text-xl font-bold">Location</h2>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <FaMapMarkerAlt className="mt-0.5 text-lg text-rose-500" aria-hidden />
                <div>
                  <p className="text-sm font-semibold">New York, USA</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    City and country shared for collaboration context.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold">Easy Scheduling</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Prefer to skip email threads? Book a 1:1 conversation on Topmate.
              </p>
              <Link
                href="https://topmate.io/introvert_influencer"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                <FaRegCalendarCheck aria-hidden />
                Book via Topmate
              </Link>
            </div>
          </article>
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 md:p-8">
          <h2 className="text-2xl font-bold">Contact Form</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            On submit, your inquiry is recorded to a connected Google Sheet and sent by email to
            jain.mrinal140@gmail.com.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </article>
      </section>
    </main>
  );
}