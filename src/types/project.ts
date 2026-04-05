export type Project = {
    _id?: string;
    name: string;
    slug: string;
    description: string;
    tags: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    order?: number;
    createdAt?: string;
    updatedAt?: string;
};