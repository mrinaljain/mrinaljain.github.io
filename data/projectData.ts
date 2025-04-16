export interface Project {
   title: string;
   slug: string;
   description: string;
   year: string;
   techStack: string[];
   image: string; // public/images/yourproject.png
   github?: string;
   live?: string;
   featured?: boolean;
}

export const projectData: Project[] = [
   {
      title: "STAGE OTT App",
      slug: "stage-ott-app",
      description:
         "A culturally immersive OTT platform built with Flutter and Firebase for multilingual content delivery across mobile and TV platforms.",
      year: "2023",
      techStack: ["Flutter", "Firebase", "Dart", "AWS"],
      image: "/images/projects/stage-ott.png",
      live: "https://stage.in",
      featured: true,
   },
   {
      title: "Deep Linking System",
      slug: "deep-link-optimizer",
      description:
         "Implemented deferred deep links via Firebase + Facebook Ads, increasing onboarding conversions by 20%.",
      year: "2022",
      techStack: ["Firebase", "JavaScript", "Facebook Ads"],
      image: "/images/projects/deep-links.png",
   },
   {
      title: "Flutter Flavor Architecture",
      slug: "flutter-multi-flavors",
      description:
         "Designed a robust flavor-based multi-app architecture in Flutter to support multiple OTT apps from a single codebase.",
      year: "2023",
      techStack: ["Flutter", "Dart", "CI/CD"],
      image: "/images/projects/flutter-flavors.png",
      github: "https://github.com/mrinaljain/flutter-flavor-template",
   },
   {
      title: "Firebase Feature Showcase",
      slug: "firebase-feature-showcase",
      description:
         "Highlighted by Google Firebase for integrating A/B testing, crash analytics, and performance monitoring at scale.",
      year: "2022",
      techStack: ["Firebase", "Analytics", "AB Testing"],
      image: "/images/projects/firebase-showcase.png",
   },
];
