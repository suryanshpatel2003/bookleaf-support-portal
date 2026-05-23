const openai = require("../config/openai");

const classifyTicket = async (ticketText) => {
  try {

    const prompt = `
You are an AI support classifier for BookLeaf Publishing.

Classify the support ticket into ONLY one category:

1. Royalty & Payments
2. ISBN & Metadata Issues
3. Printing & Quality
4. Distribution & Availability
5. Book Status & Production Updates
6. General Inquiry

Ticket:
${ticketText}

Return ONLY the category name.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",

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

    console.log("Classification Error:", error.message);

    return "General Inquiry";

  }
};

module.exports = classifyTicket;