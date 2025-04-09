export interface NewsItem {
   id: number;
   title: string;
   image: string;
   date: string;
   link: string;
}

export const newsItems: NewsItem[] = [
   {
      id: 1,
      title: "Mrinal Jain Featured in TechCrunch",
      image: "/newspaper1.jpg",
      date: "March 10, 2024",
      link: "https://techcrunch.com/article",
   },
   {
      id: 2,
      title: "Interview with The Economic Times",
      image: "/newspaper2.jpg",
      date: "February 5, 2024",
      link: "https://economictimes.com/interview",
   },
   {
      id: 3,
      title: "Forbes 30 Under 30 Feature",
      image: "/newspaper3.jpg",
      date: "January 15, 2024",
      link: "https://forbes.com/feature",
   },
];