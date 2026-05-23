const openai = require("../config/openai");

const generatePriority = async (ticketText) => {
  try {

    const prompt = `
You are a support priority analyzer.

Analyze the ticket and return ONLY one priority:

Critical
High
Medium
Low

Priority Rules:
- Payment delays over months => Critical
- ISBN mismatch => High
- Printing defects => High
- Distribution unavailable => Medium
- General metadata update => Low

Ticket:
${ticketText}
`;

    const response = await openai.chat.completions.create({
     model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.2,
    });

    return response.choices[0].message.content.trim();

  } catch (error) {

    console.log("Priority Error:", error.message);

    return "Medium";

  }
};

module.exports = generatePriority;