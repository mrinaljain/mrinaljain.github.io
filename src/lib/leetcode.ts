const LEETCODE_API_BASE = "https://alfa-leetcode-api.onrender.com";

export interface LeetCodeStats {
  username: string;
  solved: number;
  total: number;
  hardSolved?: number;
  mediumSolved?: number;
  easySolved?: number;
  acceptance?: number;
  ranking?: number;
  contributionPoint?: number;
}

export interface LeetCodeProfile {
  username: string;
  solved?: number;
  total?: number;
  hardSolved?: number;
  mediumSolved?: number;
  easySolved?: number;
  acceptance?: number;
  ranking?: number;
  contributionPoint?: number;
}

/**
 * Fetch LeetCode profile stats for a given username
 * Uses the alfa-leetcode-api service
 */
export async function fetchLeetCodeStats(
  username: string
): Promise<LeetCodeStats | null> {
  try {
    const response = await fetch(
      `${LEETCODE_API_BASE}/${username}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch LeetCode stats: ${response.status}`);
      return null;
    }

    const data: LeetCodeProfile = await response.json();

    return {
      username: data.username || username,
      solved: data.solved || 0,
      total: data.total || 0,
      hardSolved: data.hardSolved || 0,
      mediumSolved: data.mediumSolved || 0,
      easySolved: data.easySolved || 0,
      acceptance: data.acceptance || 0,
      ranking: data.ranking,
      contributionPoint: data.contributionPoint,
    };
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return null;
  }
}

/**
 * Get the difficulty badge color
 */
export function getDifficultyColor(
  difficulty: "easy" | "medium" | "hard"
): string {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "hard":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

/**
 * Get the difficulty badge style classes
 */
export function getDifficultyBadgeStyle(
  difficulty: "easy" | "medium" | "hard"
): { bg: string; text: string } {
  switch (difficulty) {
    case "easy":
      return { bg: "bg-green-500", text: "text-white" };
    case "medium":
      return { bg: "bg-yellow-500", text: "text-white" };
    case "hard":
      return { bg: "bg-red-500", text: "text-white" };
    default:
      return { bg: "bg-gray-500", text: "text-white" };
  }
}

/**
 * Calculate the percentage of questions solved
 */
export function calculateSolvePercentage(solved: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((solved / total) * 100);
}
