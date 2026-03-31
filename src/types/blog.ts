export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};
