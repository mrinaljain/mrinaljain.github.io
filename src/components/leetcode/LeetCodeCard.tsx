"use client";

import { LeetCodeStats } from "@/lib/leetcode";
import React from "react";

interface LeetCodeCardProps {
  stats: LeetCodeStats;
}

/**
 * LeetCode Card Component
 * Displays user's LeetCode statistics in a visually appealing card format
 */
export default function LeetCodeCard({ stats }: LeetCodeCardProps) {
  const solvePercentage = stats.total > 0
    ? Math.round((stats.solved / stats.total) * 100)
    : 0;

  const getDifficultyColor = (type: "easy" | "medium" | "hard") => {
    switch (type) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDifficultyLabel = (type: "easy" | "medium" | "hard") => {
    switch (type) {
      case "easy":
        return "Easy";
      case "medium":
        return "Medium";
      case "hard":
        return "Hard";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-linear-to-r from-orange-400 to-yellow-400 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">
              LeetCode Profile
            </h3>
            <a
              href={`https://leetcode.com/${stats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-sm mt-1 inline-block"
            >
              @{stats.username} ↗
            </a>
          </div>
          <div className="text-5xl">🚀</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Overall Stats */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Questions Solved
            </span>
            <span className="text-2xl font-bold text-gray-900">
              {stats.solved}/{stats.total}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-linear-to-r from-green-500 to-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${solvePercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-right">
            {solvePercentage}% Complete
          </p>
        </div>

        {/* Difficulty Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { type: "easy" as const, count: stats.easySolved || 0 },
            { type: "medium" as const, count: stats.mediumSolved || 0 },
            { type: "hard" as const, count: stats.hardSolved || 0 },
          ].map(({ type, count }) => (
            <div
              key={type}
              className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
            >
              <div className={`w-3 h-3 rounded-full ${getDifficultyColor(type)} mx-auto mb-2`} />
              <p className="text-xs text-gray-600 mb-1">
                {getDifficultyLabel(type)}
              </p>
              <p className="text-xl font-bold text-gray-900">{count}</p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          {stats.acceptance !== undefined && stats.acceptance > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Acceptance Rate</span>
              <span className="font-semibold text-gray-900">
                {stats.acceptance.toFixed(2)}%
              </span>
            </div>
          )}

          {stats.ranking !== undefined && stats.ranking > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Global Ranking</span>
              <span className="font-semibold text-gray-900">
                #{stats.ranking?.toLocaleString()}
              </span>
            </div>
          )}

          {stats.contributionPoint !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Contribution Points</span>
              <span className="font-semibold text-gray-900">
                {stats.contributionPoint}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200">
          <a
            href={`https://leetcode.com/${stats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-linear-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-2 rounded-lg transition-all duration-200 inline-block text-center"
          >
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
}
