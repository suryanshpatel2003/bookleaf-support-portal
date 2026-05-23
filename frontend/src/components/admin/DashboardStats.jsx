import React from 'react';

const DashboardStats = ({ title, value, type = "primary" }) => {
  // Glow effect aur line indicators ke liye conditional classes
  const styles = {
    primary: {
      glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
      line: "bg-gradient-to-r from-indigo-500 to-cyan-500",
      text: "text-indigo-400",
    },
    danger: {
      glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
      line: "bg-gradient-to-r from-rose-500 to-orange-500",
      text: "text-rose-400",
    },
    warning: {
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
      line: "bg-gradient-to-r from-amber-500 to-yellow-400",
      text: "text-amber-400",
    },
  };

  const currentStyle = styles[type] || styles.primary;

  return (
    <div className={`group relative overflow-hidden backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-900/80 ${currentStyle.glow}`}>
      
      {/* Top indicator bar for cinematic accent */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] w-full transition-all duration-300 opacity-60 group-hover:opacity-100 ${currentStyle.line}`} />

      {/* Card Content */}
      <div className="flex flex-col justify-between h-full relative z-10">
        <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase group-hover:text-slate-300 transition-colors duration-200">
          {title}
        </h2>

        <div className="flex items-baseline justify-between mt-5">
          <p className="text-4xl font-black tracking-tight text-white font-mono">
            {value}
          </p>
          
          {/* Subtle design element: mini glowing status dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStyle.line}`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${currentStyle.line}`} />
          </span>
        </div>
      </div>

      {/* Radial ambient light inside card on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_60%)] transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default DashboardStats;