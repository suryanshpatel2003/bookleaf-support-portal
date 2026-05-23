import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorLayout from "../../layouts/AuthorLayout"; // Layout component wrapped
import Navbar from "../../components/common/Navbar";
import TicketChat from "../../components/author/TicketChat";
import API from "../../api/axios";

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const res = await API.get(`/tickets/my-tickets`);
      const foundTicket = res.data.tickets.find((item) => item._id === id);
      setTicket(foundTicket);
    } catch (error) {
      console.log(error);
    }
  };

  const getPriorityStyle = (priority) => {
    const p = priority?.toLowerCase();
    if (p === "high" || p === "critical") return "bg-rose-500/10 text-rose-400 border-rose-500/30";
    if (p === "medium") return "bg-amber-500/10 text-amber-400 border-amber-500/30";
    return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
  };

  if (!ticket) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 font-medium">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          Loading secure logs...
        </div>
      </div>
    );
  }

  return (
    <AuthorLayout>
      <Navbar />
      <div className="max-w-5xl mx-auto py-4 space-y-8">
        {/* Ticket Snapshot Card */}
        <div className="backdrop-blur-md bg-gradient-to-b from-slate-900/70 to-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-[3px] bg-indigo-500" />

          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {ticket.subject}
            </h1>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${getPriorityStyle(ticket.priority)}`}>
              {ticket.priority} Priority
            </span>
          </div>

          <p className="mt-5 text-slate-300 text-sm leading-relaxed border-b border-slate-800/60 pb-6">
            {ticket.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-6 text-xs font-semibold">
            <div className="flex items-center gap-2 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/60">
              <span className="text-slate-500">Category:</span>
              <span className="text-slate-300">{ticket.category}</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/60">
              <span className="text-slate-500">Status:</span>
              <span className="text-indigo-400 uppercase tracking-wider">{ticket.status}</span>
            </div>
          </div>
        </div>

        {/* Message Thread Block */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-300 pl-1">
            Conversation History
          </h2>
          <div className="backdrop-blur-md bg-slate-900/20 rounded-2xl border border-slate-800/60 p-4">
            <TicketChat messages={ticket.messages} />
          </div>
        </div>
      </div>
    </AuthorLayout>
  );
};

export default TicketDetails;