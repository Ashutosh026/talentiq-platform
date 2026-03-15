// Judge0 CE API via RapidAPI
const JUDGE0_API_URL = import.meta.env.VITE_JUDGE0_API_URL || "https://judge0-ce.p.rapidapi.com";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    const rapidApiKey = import.meta.env.VITE_JUDGE0_API_KEY;
    const rapidApiHost = import.meta.env.VITE_JUDGE0_API_HOST || "judge0-ce.p.rapidapi.com";

    if (!rapidApiKey) {
      return {
        success: false,
        error: "Missing Judge0 API key. Set VITE_JUDGE0_API_KEY in frontend env.",
      };
    }

    const response = await fetch(`${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": rapidApiHost,
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: code,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();

    const output = data.stdout || "";
    const stderr = data.stderr || "";
    const compileOutput = data.compile_output || "";
    const message = data.message || "";
    const statusDescription = data.status?.description || "";

    if (stderr || compileOutput || message) {
      return {
        success: false,
        output,
        error: stderr || compileOutput || message || statusDescription || "Execution failed",
      };
    }

    return {
      success: true,
      output: output || statusDescription || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}
