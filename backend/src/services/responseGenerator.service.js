const openai = require("../config/openai");

const knowledgeBase = require("../prompts/knowledgeBase");

const generateAIResponse = async (ticket) => {
  try {

    const prompt = `
You are a professional support representative of BookLeaf Publishing.

Use the knowledge base and communication tone strictly.

KNOWLEDGE BASE:
${knowledgeBase}

AUTHOR TICKET:

Subject:
${ticket.subject}

Description:
${ticket.description}

INSTRUCTIONS:
- Be empathetic
- Be professional
- Give specific timelines
- Do not sound robotic
- Keep response concise
- Mention next steps clearly

Generate support response.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.5,
    });

    return response.choices[0].message.content;

  } catch (error) {

    console.log("AI Response Error:", error.message);

    return "AI response unavailable currently. Please respond manually.";

  }
};

module.exports = generateAIResponse; 