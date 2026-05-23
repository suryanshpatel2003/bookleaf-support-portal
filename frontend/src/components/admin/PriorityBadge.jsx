const PriorityBadge = ({ priority }) => {
  const p = priority?.toLowerCase();
  
  // Custom glass glow mappings based on priority type
  const badgeStyles = 
    p === "high" || p === "critical" ? "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_12px_rgba(239,68,68,0.05)]" :
    p === "medium" ? "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.05)]" :
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.05)]";

  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${badgeStyles}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;