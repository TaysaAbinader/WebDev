const model = require("../services/gemini");


// POST request to /generate-text1 with the following JSON payload:
// {
//   "prompt": "Write 3 practical tips for staying productive while working from home."
// }

// const generateText1 = async (req, res) => {
//     const { prompt } = req.body || {};

//     if (!prompt) {
//         return res.status(400).json({ message: "Prompt is required" });
//     }

//     try {
//         const result = await model(prompt)
//         res.json({ output: result.text })
//     } catch (error) {
//         res.status(500).json({ error: error.message })
//     }
// }

// module.exports = generateText1;


// POST /api/generate-text1
const generateText1 = async (req, res) => {
  try {
    // ✅ STATIC PROMPT (you change this text for Task 1)
    const prompt = "Suggest 5 creative marketing ideas for a small coffee shop.";

    const result = await model(prompt);
    res.json({ output: result.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// ✅ Export as an object (most likely what your routes expect)
module.exports = { generateText1 };

