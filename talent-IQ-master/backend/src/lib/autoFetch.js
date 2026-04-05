import fetch from "node-fetch";
import Problem from "../models/Problem.js";

// Helper to delay between API requests so we don't get IP banned
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const autoFetchLeetCodeProblems = async () => {
    try {
        console.log("🔄 Starting Auto-Fetch of LeetCode Problems...");

        // Fetch a list of top 20 problems to start
        const listResponse = await fetch("https://alfa-leetcode-api.onrender.com/problems?limit=20");
        const listData = await listResponse.json();

        if (!listData.problemsetQuestionList) {
            console.error("Failed to parse LeetCode list.");
            return;
        }

        const problems = listData.problemsetQuestionList;

        for (const meta of problems) {
            // Check if it already exists, skip if so
            const exists = await Problem.findOne({ id: meta.titleSlug });
            if (exists) {
                continue;
            }

            console.log(`Fetching details for: ${meta.titleSlug}...`);
            await delay(1000); // 1-second delay between requests to avoid rate limits

            const detailResponse = await fetch(`https://alfa-leetcode-api.onrender.com/select?titleSlug=${meta.titleSlug}`);
            const detailData = await detailResponse.json();

            if (!detailData || !detailData.question) continue;

            // Structure it into our DB model
            const newProblem = new Problem({
                id: detailData.titleSlug || meta.titleSlug,
                title: detailData.questionTitle || meta.title,
                difficulty: detailData.difficulty || meta.difficulty,
                category: (detailData.topicTags || []).map(t => t.name).join(" • "),
                description: {
                    text: detailData.question, // This is raw HTML
                    notes: []
                },
                examples: [], // ALFA folds examples inside the HTML `question` body.
                constraints: [], 
                starterCode: {
                    javascript: "/* Write your solution here */",
                    python: "# Write your solution here",
                    java: "class Solution {\n    // Write your solution here \n}"
                }
            });

            await newProblem.save();
            console.log(`✅ Saved: ${newProblem.title}`);
        }

        console.log("✅ Auto-Fetch cycle completed.");

    } catch (e) {
        console.error("⚠️ Error in auto-fetch:", e.message);
    }
};
