import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import TicketChat from "../../components/author/TicketChat";

import {
  getAllTickets,
  generateAIDraft,
  replyTicket,
  updateTicketStatus,
  saveInternalNote,
  assignTicketToMe,
} from "../../api/ticketApi";

const TicketDetails = () => {

  const { id } = useParams();

  const [ticket, setTicket] =
    useState(null);

  const [reply, setReply] =
    useState("");

  const [aiReply, setAIReply] =
    useState("");

  const [
    internalNote,
    setInternalNote,
  ] = useState("");

  useEffect(() => {

    fetchTicket();

  }, []);

  const fetchTicket = async () => {

    try {

      const res =
        await getAllTickets();

      const foundTicket =
        res.data.tickets.find(
          (item) =>
            item._id === id
        );

      setTicket(foundTicket);

      setInternalNote(
        foundTicket.internalNotes ||
          ""
      );

    } catch (error) {

      console.log(error);

    }

  };

  const handleGenerateAI =
    async () => {

      try {

        const res =
          await generateAIDraft(id);

        setAIReply(
          res.data.aiReply
        );

        setReply(
          res.data.aiReply
        );

      } catch (error) {

        console.log(error);

      }

    };

  const handleReply =
    async () => {

      try {

        await replyTicket(id, {
          message: reply,
        });

        alert("Reply Sent");

        setReply("");

        fetchTicket();

      } catch (error) {

        console.log(error);

      }

    };

  const handleStatusChange =
    async (status) => {

      try {

        await updateTicketStatus(
          id,
          {
            status,
          }
        );

        alert(
          "Status Updated"
        );

        fetchTicket();

      } catch (error) {

        console.log(error);

      }

    };

  const handleSaveNote =
    async () => {

      try {

        await saveInternalNote(
          id,
          {
            note:
              internalNote,
          }
        );

        alert(
          "Internal Note Saved"
        );

        fetchTicket();

      } catch (error) {

        console.log(error);

      }

    };

  const handleAssignToMe =
    async () => {

      try {

        await assignTicketToMe(
          id
        );

        alert(
          "Ticket Assigned"
        );

        fetchTicket();

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

  const getStatusStyle = (
    status
  ) => {

    const s =
      status?.toUpperCase();

    if (s === "RESOLVED") {

      return `
        text-emerald-400
        bg-emerald-500/10
        border-emerald-500/20
      `;

    }

    if (
      s === "IN_PROGRESS"
    ) {

      return `
        text-blue-400
        bg-blue-500/10
        border-blue-500/20
      `;

    }

    return `
      text-yellow-400
      bg-yellow-500/10
      border-yellow-500/20
    `;

  };

  if (!ticket) {

    return (

      <div className="
        min-h-screen
        bg-slate-950
        flex
        items-center
        justify-center
        text-slate-400
      ">

        Loading...

      </div>

    );

  }

  return (

    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-zinc-950
      text-slate-100
    ">

      <Navbar />

      <div className="
        max-w-5xl
        mx-auto
        p-6
        sm:p-10
        space-y-8
      ">

        {/* Ticket Card */}

        <div className="
          backdrop-blur-md
          bg-gradient-to-b
          from-slate-900/70
          to-slate-900/40
          p-6
          sm:p-8
          rounded-2xl
          border
          border-slate-800/80
          shadow-2xl
        ">

          <div className="
            flex
            flex-col
            sm:flex-row
            justify-between
            items-start
            gap-4
          ">

            <h1 className="
              text-2xl
              sm:text-3xl
              font-extrabold
              text-white
            ">
              {ticket.subject}
            </h1>

            <span className={`
              text-xs
              uppercase
              tracking-widest
              font-bold
              px-3
              py-1
              rounded-full
              border
              ${getPriorityStyle(
                ticket.priority
              )}
            `}>

              {ticket.priority}
              {" "}
              Priority

            </span>

          </div>

          <p className="
            mt-5
            text-slate-300
            text-sm
            leading-relaxed
            border-b
            border-slate-800/60
            pb-6
          ">

            {ticket.description}

          </p>

          <div className="
            mt-5
            flex
            flex-wrap
            gap-6
            text-sm
          ">

            <div className="
              flex
              items-center
              gap-2
              bg-slate-950/40
              px-3
              py-1.5
              rounded-lg
              border
              border-slate-800/60
            ">

              <span className="
                text-slate-500
                font-medium
              ">
                Category:
              </span>

              <span className="
                text-slate-300
                font-semibold
              ">
                {ticket.category}
              </span>

            </div>

            <div className={`
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-lg
              border
              ${getStatusStyle(
                ticket.status
              )}
            `}>

              <span className="
                opacity-60
                font-medium
              ">
                Status:
              </span>

              <span className="
                font-bold
                tracking-wide
                text-xs
              ">
                {ticket.status}
              </span>

            </div>

          </div>

        </div>

        {/* Chat */}

        <div className="space-y-4">

          <h2 className="
            text-xl
            font-bold
            text-slate-300
          ">
            💬 Conversation Log
          </h2>

          <div className="
            backdrop-blur-md
            bg-slate-900/20
            rounded-2xl
            border
            border-slate-800/60
            p-4
          ">

            <TicketChat
              messages={
                ticket.messages
              }
            />

          </div>

        </div>

        {/* Action Panel */}

        <div className="
          backdrop-blur-md
          bg-gradient-to-b
          from-slate-900/60
          to-slate-900/30
          p-6
          rounded-2xl
          border
          border-slate-800/80
          shadow-2xl
          space-y-4
        ">

          <div className="
            flex
            justify-between
            items-center
            flex-wrap
            gap-3
          ">

            <h3 className="
              text-base
              font-bold
              text-slate-300
            ">
              Action Console
            </h3>

            <button
              onClick={
                handleGenerateAI
              }
              className="
                px-4
                py-2
                text-xs
                font-semibold
                rounded-lg
                bg-indigo-500/10
                hover:bg-indigo-500/20
                text-indigo-400
                border
                border-indigo-500/20
              "
            >
              ✨ Draft with AI
            </button>

          </div>

          <textarea
            rows="6"
            value={reply}
            onChange={(e) =>
              setReply(
                e.target.value
              )
            }
            placeholder="Type official response..."
            className="
              w-full
              bg-slate-950/60
              border
              border-slate-800
              text-slate-200
              p-4
              rounded-xl
              outline-none
            "
          />

          <div className="
            flex
            justify-between
            items-center
            flex-wrap
            gap-4
          ">

            <button
              onClick={
                handleReply
              }
              className="
                px-6
                py-2.5
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                font-semibold
                text-sm
              "
            >
              Send Reply
            </button>

            <div className="
              flex
              items-center
              gap-2
              bg-slate-950/60
              p-1
              rounded-xl
              border
              border-slate-800/80
            ">

              <button
                onClick={() =>
                  handleStatusChange(
                    "OPEN"
                  )
                }
                className="
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  rounded-lg
                  text-amber-400
                "
              >
                Open
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    "IN_PROGRESS"
                  )
                }
                className="
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  rounded-lg
                  text-blue-400
                "
              >
                In Progress
              </button>

              <button
                onClick={() =>
                  handleStatusChange(
                    "RESOLVED"
                  )
                }
                className="
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  rounded-lg
                  text-emerald-400
                "
              >
                Resolve
              </button>

            </div>

          </div>

          {/* Internal Notes */}

          <div className="
            mt-8
            border-t
            border-slate-800
            pt-6
          ">

            <div className="
              flex
              justify-between
              items-center
              mb-4
            ">

              <h3 className="
                text-lg
                font-bold
                text-slate-300
              ">
                Internal Notes
              </h3>

              <button
                onClick={
                  handleAssignToMe
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  bg-violet-500/10
                  border
                  border-violet-500/20
                  text-violet-300
                  text-sm
                  font-semibold
                "
              >
                Assign To Me
              </button>

            </div>

            {
              ticket.assignedTo && (

                <p className="
                  text-sm
                  text-slate-400
                  mb-4
                ">

                  Assigned Admin:
                  {" "}

                  <span className="
                    text-white
                    font-semibold
                  ">

                    {ticket.assignedTo}

                  </span>

                </p>

              )
            }

            <textarea
              rows="4"
              value={internalNote}
              onChange={(e) =>
                setInternalNote(
                  e.target.value
                )
              }
              placeholder="Write internal notes..."
              className="
                w-full
                bg-slate-950/60
                border
                border-slate-800
                text-slate-200
                p-4
                rounded-xl
                outline-none
              "
            />

            <button
              onClick={
                handleSaveNote
              }
              className="
                mt-4
                px-5
                py-2.5
                rounded-xl
                bg-emerald-600
                text-white
                font-semibold
                text-sm
              "
            >
              Save Internal Note
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default TicketDetails;