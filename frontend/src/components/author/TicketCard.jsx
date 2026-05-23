const TicketCard = ({ ticket }) => {
  const p = ticket.priority?.toLowerCase();
  
  // Custom glass glow mappings based on priority
  const priorityStyle = 
    p === "high" || p === "critical" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
    p === "medium" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";

  return (
    <div className="backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-slate-700/60">
      
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-100">
          {ticket.subject}
        </h2>
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${priorityStyle}`}>
          {ticket.priority}
        </span>
      </div>

      <p className="mt-3 text-slate-400 text-sm leading-relaxed">
        {ticket.description}
      </p>

      {/* Footer Info Row */}
      <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center text-xs text-slate-500 font-semibold">
        <span className="flex items-center gap-1.5 bg-slate-950/40 border border-slate-800 px-2.5 py-1 rounded-lg">
          <span className={`w-1.5 h-1.5 rounded-full ${ticket.status?.toUpperCase() === "RESOLVED" ? "bg-emerald-400" : "bg-amber-400"}`} />
          Status: <span className="text-slate-300 uppercase tracking-wide text-[10px]">{ticket.status}</span>
        </span>
      </div>
    </div>
  );
};

export default TicketCard;