const TicketChat = ({ messages }) => {

  return (
    <div className="space-y-4">

      {
        messages?.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              msg.sender === "admin"
                ? "bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))
      }

    </div>
  );
};

export default TicketChat;