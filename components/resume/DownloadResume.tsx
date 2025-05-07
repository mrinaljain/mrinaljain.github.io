import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const DownloadResume = () => (
   <a
      href="/mrinaljain_cv_feb2025.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 md:px-5 md:py-3  animate-slideup animate-pulse-slow"
      aria-label="Download Resume"
   >
      {/* Visible text only on medium screens and up */}
      <span className="hidden md:block">Download Resume</span>
      <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
   </a>
);

export default DownloadResume;
