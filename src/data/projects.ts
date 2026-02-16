// data/projects.ts

export const sideProjects = [
   {
      name: "Witty AI",
      command: "witty-ai",
      description: "A GPT-powered assistant that helps devs write code and documentation faster.",
      stack: ["Next.js", "OpenAI", "Tailwind"],
      githubUrl: "https://github.com/mrinaljain/witty-ai",
      liveUrl: "https://witty-ai.vercel.app",
      featured: true,

   },
   {
      name: "DevDeck",
      command: "devdeck",
      description: "A custom productivity dashboard with GitHub, weather, and AI widgets.",
      stack: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/mrinaljain/devdeck",
      featured: true,

   },
   {
      name: "Flutrack",
      command: "flutrack",
      description: "Track Flutter app size and performance regressions with visual reports.",
      stack: ["Flutter", "Firebase", "Cloud Functions"],
      githubUrl: "https://github.com/mrinaljain/flutrack",
      liveUrl: "https://flutrack.app",
      featured: true,

   },
   {
      name: "Portfoliotron",
      command: "portfoliotron",
      description: "A headless portfolio builder for developers with markdown support.",
      stack: ["Astro", "Prisma", "SQLite"],
      githubUrl: "https://github.com/mrinaljain/portfoliotron",
      featured: false,

   },
];
 