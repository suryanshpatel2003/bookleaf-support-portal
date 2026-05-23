const AIResponseBox = ({ response }) => {
  if (!response) return null;

  return (
    <div className="relative overflow-hidden backdrop-blur-lg bg-indigo-950/10 p-6 rounded-2xl border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.05)] mt-6 animate-fade-in">
      {/* Top micro glowing ambient strip */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      
      <h2 className="text-lg font-bold mb-4 text-indigo-300 flex items-center gap-2 tracking-tight">
        🤖 AI Draft Response
      </h2>
      
      <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/40 border border-slate-800/60 p-4 rounded-xl font-mono whitespace-pre-line selection:bg-indigo-500/30">
        {response}
      </p>
    </div>
  );
};

export default AIResponseBox;