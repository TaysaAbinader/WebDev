// controllers/textController3.js
const model = require("../services/gemini");

const generateText3 = async (req, res) => {
  try {
    const { age, gender, healthGoal, dietPreference, workoutDays } = req.body || {};

    if (!age || !gender || !healthGoal || !dietPreference || !workoutDays) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const prompt = `
      I am a ${age}-year-old ${gender} aiming to ${healthGoal}.
      My diet preference is ${dietPreference}, and I can work out ${workoutDays} days per week.
      Please provide a personalized weekly health and fitness plan, including exercise types, duration, and meal suggestions.`;

    const result = await model(prompt);
    res.json({ output: result.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { generateText3 };
