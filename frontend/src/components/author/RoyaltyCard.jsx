const RoyaltyCard = ({ amount }) => {
  return (
    <div className="group relative overflow-hidden backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]">
      {/* Top premium emerald light strip */}
      <div className="absolute top-0 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col justify-between h-full relative z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Total Royalty
          </h2>
          <span className="text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            💰 Earnings
          </span>
        </div>

        <div className="flex items-baseline justify-between mt-6">
          <p className="text-4xl font-black tracking-tight text-white font-mono">
            ₹{amount}
          </p>
          
          {/* Micro status pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoyaltyCard;