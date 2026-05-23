import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-slate-900 px-8 py-4 flex justify-between items-center transition-all duration-300">
      {/* Brand Branding Logo */}
      <div className="flex items-center gap-3 group select-none">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-105 transition-transform duration-300">
          <span className="text-white text-sm font-black">B</span>
        </div>
        <h1 className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          BookLeaf
        </h1>
      </div>

      {/* User Meta actions */}
      <div className="flex items-center gap-5">
        {user && (
          <div className="flex items-center gap-2.5 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
            <span className="text-slate-400 font-normal capitalize">{user.role}</span>
          </div>
        )}

        <button
          onClick={logout}
          className="text-xs font-bold tracking-wide bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/20 hover:bg-rose-500/5 px-4 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;