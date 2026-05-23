import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getAllTickets,
  generateAIDraft,
} from "../../api/ticketApi";

const AllTickets = () => {

  const [tickets, setTickets] = useState([]);

  const [aiReply, setAIReply] = useState("");

  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    category: "",
    search: "",
  });

  useEffect(() => {

    fetchTickets();

  }, [filters]);

  const fetchTickets = async () => {

    try {

      const cleanedFilters = {};

      Object.keys(filters).forEach((key) => {

        if (filters[key]) {
          cleanedFilters[key] =
            filters[key];
        }

      });

      const res =
        await getAllTickets(
          cleanedFilters
        );

      setTickets(res.data.tickets);

    } catch (error) {

      console.log(error);

    }

  };

  const handleGenerateReply = async (
    id
  ) => {

    try {

      const res =
        await generateAIDraft(id);

      setAIReply(res.data.aiReply);

    } catch (error) {

      console.log(error);

    }

  };

  const getPriorityStyle = (
    priority
  ) => {

    const p =
      priority?.toLowerCase();

    if (
      p === "high" ||
      p === "critical"
    ) {

      return `
        bg-rose-500/10
        text-rose-400
        border-rose-500/30
      `;

    }

    if (p === "medium") {

      return `
        bg-amber-500/10
        text-amber-400
        border-amber-500/30
      `;

    }

    return `
      bg-cyan-500/10
      text-cyan-400
      border-cyan-500/30
    `;

  };

  return (
    <AdminLayout>

      <div className="max-w-6xl mx-auto py-4">

        {/* Heading */}

        <div className="relative mb-10">

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-full blur-[2px]" />

          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            All Tickets
          </h1>

          <p className="text-xs text-slate-400 mt-1 tracking-wider uppercase font-medium">
            Manage incoming support streams
          </p>

        </div>

        {/* Filters */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

          <input
            type="text"
            placeholder="Search Subject"
            value={filters.search}
            onChange={(e) =>
              setFilters({
                ...filters,
                search: e.target.value,
              })
            }
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          />

          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({
                ...filters,
                status: e.target.value,
              })
            }
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          >

            <option value="">
              All Status
            </option>

            <option value="OPEN">
              OPEN
            </option>

            <option value="IN_PROGRESS">
              IN PROGRESS
            </option>

            <option value="RESOLVED">
              RESOLVED
            </option>

          </select>

          <select
            value={filters.priority}
            onChange={(e) =>
              setFilters({
                ...filters,
                priority: e.target.value,
              })
            }
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          >

            <option value="">
              All Priority
            </option>

            <option value="Critical">
              Critical
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>

          </select>

          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({
                ...filters,
                category: e.target.value,
              })
            }
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          >

            <option value="">
              All Category
            </option>

            <option value="Royalty & Payments">
              Royalty & Payments
            </option>

            <option value="ISBN & Metadata Issues">
              ISBN & Metadata
            </option>

            <option value="Printing & Quality">
              Printing & Quality
            </option>

            <option value="Distribution & Availability">
              Distribution
            </option>

            <option value="Book Status & Production Updates">
              Production
            </option>

            <option value="General Inquiry">
              General Inquiry
            </option>

          </select>

        </div>

        {/* Tickets */}

        <div className="space-y-6">

          {
            tickets.map((ticket) => (

              <div
                key={ticket._id}
                className="
                  group
                  relative
                  backdrop-blur-md
                  bg-gradient-to-b
                  from-slate-900/60
                  to-slate-900/30
                  p-6
                  rounded-2xl
                  border
                  border-slate-800/80
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-900/80
                  hover:border-slate-700/60
                  shadow-xl
                "
              >

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

                  <h2 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                    {ticket.subject}
                  </h2>

                  <span
                    className={`
                      text-xs
                      uppercase
                      font-semibold
                      tracking-widest
                      px-3
                      py-1
                      rounded-full
                      border
                      ${getPriorityStyle(ticket.priority)}
                    `}
                  >
                    {ticket.priority}
                  </span>

                </div>

                <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-4xl">
                  {ticket.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-5 text-sm">

                  <div className="text-slate-300">
                    <span className="font-semibold">
                      Status:
                    </span>

                    {" "}

                    {ticket.status}
                  </div>

                  <div className="text-slate-300">
                    <span className="font-semibold">
                      Category:
                    </span>

                    {" "}

                    {ticket.category}
                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-4 items-center">

                  <button
                    onClick={() =>
                      handleGenerateReply(
                        ticket._id
                      )
                    }
                    className="
                      relative
                      overflow-hidden
                      px-5
                      py-2.5
                      rounded-xl
                      bg-gradient-to-r
                      from-indigo-600
                      to-violet-600
                      text-white
                      font-medium
                      text-sm
                      transition-all
                      duration-300
                      hover:brightness-110
                    "
                  >

                    ✨ Generate AI Reply

                  </button>

                  <Link
                    to={`/admin/tickets/${ticket._id}`}
                    className="
                      px-5
                      py-2.5
                      rounded-xl
                      bg-slate-800/80
                      border
                      border-slate-700/50
                      text-slate-200
                      font-medium
                      text-sm
                      transition-all
                      duration-300
                      hover:bg-slate-700/80
                      hover:text-white
                    "
                  >
                    Open Ticket
                  </Link>

                </div>

              </div>

            ))
          }

        </div>

        {/* AI Response */}

        {
          aiReply && (

            <div className="
              relative
              overflow-hidden
              backdrop-blur-lg
              bg-indigo-950/20
              p-6
              rounded-2xl
              border
              border-indigo-500/20
              mt-10
            ">

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <h2 className="text-xl font-bold mb-4 text-indigo-300">
                🤖 AI Draft Response
              </h2>

              <p className="
                text-slate-300
                text-sm
                leading-relaxed
                bg-slate-950/40
                border
                border-slate-800/50
                p-4
                rounded-xl
                whitespace-pre-wrap
              ">
                {aiReply}
              </p>

            </div>

          )
        }

      </div>

    </AdminLayout>
  );

};

export default AllTickets;