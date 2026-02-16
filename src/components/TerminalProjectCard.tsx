import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface TerminalProjectProps {
   name: string;
   command: string;
   description: string;
   stack: string[];
   githubUrl?: string;
   liveUrl?: string;
}

const TerminalProjectCard = ({
   name,
   command,
   description,
   stack,
   githubUrl,
   liveUrl,
}: TerminalProjectProps) => {
   return (
      <div className="bg-gray-900 text-green-300 font-mono p-5 rounded-md shadow-lg hover:shadow-xl border border-gray-700 transition-all duration-300">
         <div className="text-sm">
            <span className="text-green-500">➜</span> <span className="text-blue-400">npx</span> {command}
         </div>
         <div className="mt-2 text-green-100">
            🚀 {description}
         </div>
         <div className="mt-2 text-green-400">
            📦 Stack: {stack.join(", ")}
         </div>
         <div className="mt-3 flex gap-4 text-sm">
            {githubUrl && (
               <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <FaGithub className="text-white" /> GitHub
               </a>
            )}
            {liveUrl && (
               <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <FaExternalLinkAlt className="text-white" /> Live
               </a>
            )}
         </div>
      </div>
   );
};

export default TerminalProjectCard;
