const openai = require("../config/openai");

const knowledgeBase = require("../prompts/knowledgeBase");

const generateAIResponse = async (ticket) => {
  try {

    const prompt = `
You are a professional support representative of BookLeaf Publishing.

Use the knowledge base and communication tone strictly.

KNOWLEDGE BASE:
${knowledgeBase}

AUTHOR DETAILS:
Name: ${ticket.author?.name || "Author"}

SUPPORT AGENT:
Name: BookLeaf Support Team

TICKET DETAILS:

Subject:
${ticket.subject}

Description:
${ticket.description}

INSTRUCTIONS:
- Be empathetic
- Be professional
- Mention the author's name naturally
- Sign off professionally
- Do not use placeholders
- Keep response concise
- Mention timelines clearly

Generate support response.
`;

    const response = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",

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