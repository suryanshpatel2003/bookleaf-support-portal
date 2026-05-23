const openai = require("../config/openai");

const knowledgeBase = require("../prompts/knowledgeBase");

const generateAIResponse = async (ticket) => {

  try {

    const authorName =
      ticket.author?.name || "Author";

    const prompt = `
You are a professional support representative of BookLeaf Publishing.

Use the knowledge base and communication tone strictly.

KNOWLEDGE BASE:
${knowledgeBase}

AUTHOR DETAILS:
Name: ${authorName}

SUPPORT AGENT:
Name: BookLeaf Support Team

TICKET DETAILS:

Subject:
${ticket.subject}

Description:
${ticket.description}

IMPORTANT INSTRUCTIONS:
- Start the response with: Dear ${authorName},
- NEVER use placeholders like [Author Name]
- NEVER say "Dear Author"
- Mention the author name naturally
- Be empathetic and professional
- Keep response concise
- Mention timelines clearly
- Sign off with:
Best Regards,
BookLeaf Support Team

Generate a professional support response.
`;

    const response =
      await openai.chat.completions.create({

        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.4,

      });

    return response
      .choices[0]
      .message
      .content
      .trim();

  } catch (error) {

    console.log(
      "AI Response Error:",
      error.response?.data || error.message
    );

    return "AI response unavailable currently. Please respond manually.";

  }

};

module.exports = generateAIResponse;