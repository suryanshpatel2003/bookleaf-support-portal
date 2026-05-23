import AuthorLayout from "../../layouts/AuthorLayout"; 
import Navbar from "../../components/common/Navbar";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Books",
      value: "12",
      badge: "📚 Published",
      glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      line: "bg-gradient-to-r from-indigo-500 to-violet-500",
      text: "text-indigo-400",
    },
    {
      title: "Royalties",
      value: "₹45,000",
      badge: "💰 Earnings",
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      line: "bg-gradient-to-r from-emerald-500 to-teal-500",
      text: "text-emerald-400",
    },
    {
      title: "Tickets",
      value: "8",
      badge: "🎟️ Support",
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      line: "bg-gradient-to-r from-amber-500 to-orange-500",
      text: "text-amber-400",
    },
  ];

  return (
    <AuthorLayout>
      <Navbar />
      <div className="max-w-7xl mx-auto py-4 transition-all duration-300">
        {/* Cinematic Header Section */}
        <div className="relative mb-12">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-full blur-[2px]" />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Author Dashboard
          </h1>
          <p className="text-xs text-slate-400 mt-2 tracking-wider uppercase font-medium">
            Welcome back, Creator. Here's your workspace overview.
          </p>
        </div>

        {/* Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-900/80 ${stat.glow}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-[2px] w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${stat.line}`} />

              <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-start">
                  <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {stat.title}
                  </h2>
                  <span className={`text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full border border-slate-800 bg-slate-950/80 ${stat.text}`}>
                    {stat.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mt-6">
                  <p className="text-4xl font-black tracking-tight text-white font-mono">
                    {stat.value}
                  </p>
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stat.line}`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${stat.line}`} />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02),transparent_60%)] transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </AuthorLayout>
  );
};

export default Dashboard;