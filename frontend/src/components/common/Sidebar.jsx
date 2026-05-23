import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path;

  const authorLinks = [
    { label: "Dashboard", to: "/dashboard", emoji: "📊" },
    { label: "Books", to: "/books", emoji: "📚" },
    { label: "Tickets", to: "/tickets", emoji: "🎟️" },
    { label: "Submit", to: "/submit-ticket", emoji: "✍️" },
  ];

  const adminLinks = [
    { label: "Dashboard", to: "/admin/dashboard", emoji: "🛡️" },
    { label: "Tickets", to: "/admin/tickets", emoji: "🎫" },
  ];

  const currentLinks = user.role === "admin" ? adminLinks : authorLinks;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 bottom-0 top-[69px] w-64 backdrop-blur-md bg-gradient-to-b from-slate-950/40 to-slate-950/10 border-r border-slate-900/80 p-5 flex-col gap-2 z-40 transition-all duration-300">
        
        <div className="px-3 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Navigation Control
          </span>
        </div>

        <nav className="space-y-1.5 flex-1">
          {currentLinks.map((link, idx) => {
            const itemActive = isActive(link.to);

            return (
              <Link
                key={idx}
                to={link.to}
                className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ${
                  itemActive
                    ? "bg-gradient-to-r from-indigo-600/10 to-transparent text-indigo-400 border-l-[3px] border-indigo-500 pl-[13px]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 border-l-[3px] border-transparent"
                }`}
              >
                <span
                  className={`text-base transition-transform duration-200 group-hover:scale-110 ${
                    itemActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {link.emoji}
                </span>

                <span>{link.label}</span>

                {!itemActive && (
                  <div className="absolute right-3 w-1 h-1 rounded-full bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-slate-900/60 px-3">
          <p className="text-[10px] font-medium text-slate-600 font-mono">
            v1.0.4 • Secure Workspace
          </p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/90 border-t border-slate-800 px-2 py-2">
        <nav className="flex items-center justify-around">
          {currentLinks.map((link, idx) => {
            const itemActive = isActive(link.to);

            return (
              <Link
                key={idx}
                to={link.to}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                  itemActive
                    ? "text-indigo-400"
                    : "text-slate-400"
                }`}
              >
                <span className="text-lg">{link.emoji}</span>

                <span className="text-[10px] font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;