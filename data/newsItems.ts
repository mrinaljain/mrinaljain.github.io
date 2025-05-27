export interface NewsItem {
   title: string;
   description: string;
   imageUrl: string;
   publishedAt: Date;
   articleUrl: string;
   publisher: string;
   showOnHomepage: boolean;
   tags: string[];

}

export const newsItems: NewsItem[] = [
   {
      title: "Mrinal Jain Featured in TechCrunch",
      description: "Mrinal shares insights on scaling OTT platforms in vernacular India.",
      imageUrl: "images/news/newspaper1.jpg",
      articleUrl: "",
      publisher: "TechCrunch",
      publishedAt: new Date("2024-06-10T00:00:00.000Z"),
      showOnHomepage: true,
      tags: ["OTT", "Scaling", "India"]
   },
   {
      title: "Interview with The Economic Times",
      description: "An in-depth interview with Mrinal on the future of digital content.",
      imageUrl: "images/news/newspaper2.jpg",
      articleUrl: "",
      publisher: "The Economic Times",
      publishedAt: new Date("2024-02-05T00:00:00.000Z"),
      showOnHomepage: true,
      tags: ["Interview", "Digital India"]
   },
   {
      title: "Forbes 30 Under 30 Feature",
      description: "Mrinal featured in Forbes 30 Under 30 for tech innovation and community building.",
      imageUrl: "images/news/newspaper3.jpg",
      articleUrl: "",
      publisher: "Forbes",
      publishedAt: new Date("2024-01-15T00:00:00.000Z"),
      showOnHomepage: true,
      tags: ["Award", "Forbes", "Leadership"]
   }
];