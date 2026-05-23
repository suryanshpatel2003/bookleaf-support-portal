const BookCard = ({ book }) => {
  return (
    <div className="group relative overflow-hidden backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]">
      {/* Top ambient color strip */}
      <div className="absolute top-0 left-0 right-0 h-[2px] w-full bg-gradient-to-r from-indigo-500/40 to-purple-500/40 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col justify-between h-full relative z-10">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-200">
            {book.title}
          </h2>
          
          <div className="mt-4 space-y-2 text-xs font-medium tracking-wide">
            <p className="text-slate-400 flex justify-between border-b border-slate-800/50 pb-2">
              <span>ISBN</span>
              <span className="font-mono text-slate-200">{book.isbn}</span>
            </p>
            <p className="text-slate-400 flex justify-between pt-1">
              <span>Genre</span>
              <span className="text-indigo-400 font-semibold">{book.genre}</span>
            </p>
          </div>
        </div>

        {/* Royalty Section inside Card */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Royalty Earned</span>
          <span className="text-lg font-black text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
            ₹{book.totalRoyaltyEarned}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;