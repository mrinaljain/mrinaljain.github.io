import { fetchLeetCodeStats } from "@/lib/leetcode";
import LeetCodeCard from "./LeetCodeCard";

const LEETCODE_USERNAME = "jainmrinal";

/**
 * LeetCode Stats Wrapper Component
 * Fetches stats server-side and displays the LeetCode card
 * This is a Server Component that handles data fetching
 */
export default async function LeetCodeStatsWrapper() {
  const stats = await fetchLeetCodeStats(LEETCODE_USERNAME);

  // If stats failed to load, show a fallback message
  if (!stats) {
    return (
      <div className="w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-600 mb-4">Unable to load LeetCode profile</p>
        <a
          href={`https://leetcode.com/${LEETCODE_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          View Profile on LeetCode
        </a>
      </div>
    );
  }

  return <LeetCodeCard stats={stats} />;
}
