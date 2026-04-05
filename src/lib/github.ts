/**
 * GitHub API utility for fetching user data
 * Future scope: Can extend this to fetch repos, contributions, stats, etc.
 */

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  profile_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  company: string | null;
}

/**
 * Fetch GitHub user data by username
 * @param username - GitHub username
 * @returns GitHub user data or null if not found
 */
export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      // Cache for 1 hour
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`Failed to fetch GitHub user: ${response.statusText}`);
      return null;
    }

    const data = await response.json();

    return {
      login: data.login,
      name: data.name,
      bio: data.bio,
      avatar_url: data.avatar_url,
      profile_url: data.html_url,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      location: data.location,
      blog: data.blog,
      twitter_username: data.twitter_username,
      company: data.company,
    };
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

/**
 * Future extensions:
 * - getGitHubUserRepos(username): Fetch user's repositories
 * - getGitHubUserStats(username): Fetch user's contribution stats
 * - getGitHubUserLanguages(username): Fetch top languages used
 * - getGitHubUserPinnedRepos(username): Fetch pinned repositories
 */
