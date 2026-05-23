import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorLayout from "../../layouts/AuthorLayout"; // Added layout frame
import Navbar from "../../components/common/Navbar";
import { getMyTickets } from "../../api/ticketApi";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const res = await getMyTickets();
      setTickets(res.data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  const getPriorityStyle = (priority) => {
    const p = priority?.toLowerCase();
    if (p === "high" || p === "critical") return "bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-[0_0_12px_rgba(239,68,68,0.08)]";
    if (p === "medium") return "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.08)]";
    return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.08)]";
  };

  return (
    <AuthorLayout>
      <Navbar />
      <div className="max-w-5xl mx-auto py-4">
        <div className="relative mb-10">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-full blur-[2px]" />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            My Tickets
          </h1>
          <p className="text-xs text-slate-400 mt-1 tracking-wider uppercase font-medium">
            Track and monitor support operations
          </p>
        </div>

        <div className="space-y-5">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="backdrop-blur-md bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 hover:border-slate-700/60 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-lg font-bold tracking-tight text-slate-100">
                  {ticket.subject}
                </h2>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${getPriorityStyle(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>

              <p className="mt-3 text-slate-400 text-sm leading-relaxed max-w-4xl">
                {ticket.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-4 items-center text-xs text-slate-400 font-medium border-t border-slate-800/60 pt-4">
                <div className="bg-slate-950/40 border border-slate-800 px-2.5 py-1 rounded-lg">
                  Category: <span className="text-slate-200 font-semibold">{ticket.category}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950/40 border border-slate-800 px-2.5 py-1 rounded-lg">
                  <span className={`w-1.5 h-1.5 rounded-full ${ticket.status?.toUpperCase() === "RESOLVED" ? "bg-emerald-400" : "bg-amber-400"}`} />
                  Status: <span className="text-slate-200 font-semibold">{ticket.status}</span>
                </div>
                
                <Link
                  to={`/tickets/${ticket._id}`}
                  className="ml-auto px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs tracking-wide transition-all duration-200 hover:bg-indigo-500 shadow-md shadow-indigo-600/10 active:scale-[0.98]"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthorLayout>
  );
};

export default MyTickets;