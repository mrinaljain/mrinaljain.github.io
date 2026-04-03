import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Videos", href: "/videos" },
  { label: "Talks", href: "/talk" },
  { label: "Blog", href: "/post" },
  { label: "Tutorials", href: "/tutorial" },
];

const resourceLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Book a 1:1 Call", href: "https://topmate.io/introvert_influencer" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mrinaljain", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/mrinaljain", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com/mrinaljain", label: "Twitter" },
  { icon: FaYoutube, href: "https://www.youtube.com/@introvertinfluencer", label: "YouTube" },
  { icon: FaFacebook, href: "https://www.facebook.com/TheIntrovertInfluencer/", label: "Facebook" },
  { icon: FaEnvelope, href: "mailto:jain.mrinal140@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white text-2xl font-bold">
              Mrinal Jain
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Building scalable web &amp; mobile products. Sharing what I learn along the way.
            </p>
            <div className="flex gap-4 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <p>© {currentYear} Mrinal Jain. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
