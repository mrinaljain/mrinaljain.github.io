export type Project = {
    name: string;
    command: string;
    description: string;
    stack: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    featured: boolean;
    createdAt?: Date;
};