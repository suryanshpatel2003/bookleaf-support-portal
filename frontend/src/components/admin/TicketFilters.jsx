const TicketFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Status Filter */}
      <div className="relative">
        <select className="appearance-none bg-slate-900/60 text-sm text-slate-300 font-medium px-4 py-2.5 pr-10 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer min-w-[140px]">
          <option className="bg-slate-950 text-slate-300">All Status</option>
          <option className="bg-slate-950 text-slate-300">Open</option>
          <option className="bg-slate-950 text-slate-300">In Progress</option>
          <option className="bg-slate-950 text-slate-300">Resolved</option>
        </select>
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xs">▼</div>
      </div>

      {/* Priority Filter */}
      <div className="relative">
        <select className="appearance-none bg-slate-900/60 text-sm text-slate-300 font-medium px-4 py-2.5 pr-10 rounded-xl border border-slate-800 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer min-w-[140px]">
          <option className="bg-slate-950 text-slate-300">All Priority</option>
          <option className="bg-slate-950 text-slate-300">Critical</option>
          <option className="bg-slate-950 text-slate-300">High</option>
          <option className="bg-slate-950 text-slate-300">Medium</option>
          <option className="bg-slate-950 text-slate-300">Low</option>
        </select>
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-xs">▼</div>
      </div>
    </div>
  );
};

export default TicketFilters;