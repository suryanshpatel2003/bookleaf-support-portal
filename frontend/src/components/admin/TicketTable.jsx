import PriorityBadge from "./PriorityBadge";
import CategoryBadge from "./CategoryBadge";

const TicketTable = ({ tickets }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800/80 backdrop-blur-md bg-gradient-to-b from-slate-900/40 to-slate-900/20 shadow-2xl">
      <table className="w-full border-collapse text-left">
        {/* Table Head */}
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/80">
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400">Subject</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400">Category</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400">Priority</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-slate-800/50">
          {tickets.map((ticket) => (
            <tr
              key={ticket._id}
              className="group transition-all duration-200 hover:bg-slate-900/40"
            >
              <td className="p-4 text-sm font-semibold text-slate-200 group-hover:text-white transition-colors max-w-xs truncate">
                {ticket.subject}
              </td>
              <td className="p-4">
                <CategoryBadge category={ticket.category} />
              </td>
              <td className="p-4">
                <PriorityBadge priority={ticket.priority} />
              </td>
              <td className="p-4">
                {/* Dynamic Inline Status Tracker */}
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    ticket.status?.toUpperCase() === "RESOLVED" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" :
                    ticket.status?.toUpperCase() === "IN_PROGRESS" ? "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]" :
                    "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                  }`} />
                  <span className="text-xs font-bold tracking-wide text-slate-300 uppercase">
                    {ticket.status || "Open"}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;