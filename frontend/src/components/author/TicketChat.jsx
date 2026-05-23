const TicketChat = ({ messages }) => {
  return (
    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
      {messages?.map((msg, index) => {
        const isAdmin = msg.sender === "admin";
        
        return (
          <div
            key={index}
            className={`flex w-full ${isAdmin ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-lg ${
                isAdmin
                  ? "bg-slate-800 border border-slate-700/50 text-slate-100 rounded-tl-none"
                  : "bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-tr-none shadow-indigo-500/5"
              }`}
            >
              <p className="whitespace-pre-line font-sans">{msg.text}</p>
              
              {/* Subtle Sender Label inside chat bubble */}
              <span className={`block text-[9px] font-bold tracking-wider uppercase mt-1.5 opacity-40 text-right`}>
                {isAdmin ? "Support Agent" : "You"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketChat;