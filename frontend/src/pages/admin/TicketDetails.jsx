import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import TicketChat from "../../components/author/TicketChat";

import {
  getAllTickets,
  generateAIDraft,
  replyTicket,
} from "../../api/ticketApi";

const TicketDetails = () => {

  const { id } = useParams();

  const [ticket, setTicket] = useState(null);

  const [reply, setReply] = useState("");

  const [aiReply, setAIReply] = useState("");

  useEffect(() => {

    fetchTicket();

  }, []);

  const fetchTicket = async () => {

    try {

      const res = await getAllTickets();

      const foundTicket =
        res.data.tickets.find(
          (item) => item._id === id
        );

      setTicket(foundTicket);

    } catch (error) {

      console.log(error);

    }
  };

  const handleGenerateAI = async () => {

    try {

      const res =
        await generateAIDraft(id);

      setAIReply(res.data.aiReply);

      setReply(res.data.aiReply);

    } catch (error) {

      console.log(error);

    }
  };

  const handleReply = async () => {

    try {

      await replyTicket(id, {
        message: reply,
      });

      alert("Reply Sent");

      fetchTicket();

    } catch (error) {

      console.log(error);

    }
  };

  if (!ticket) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <div className="bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between">

            <h1 className="text-3xl font-bold">
              {ticket.subject}
            </h1>

            <span className="bg-red-500 text-white px-4 py-1 rounded">
              {ticket.priority}
            </span>

          </div>

          <p className="mt-5">
            {ticket.description}
          </p>

          <div className="mt-5 flex gap-5">

            <div>
              <span className="font-semibold">
                Category:
              </span>

              {" "}
              {ticket.category}
            </div>

            <div>
              <span className="font-semibold">
                Status:
              </span>

              {" "}
              {ticket.status}
            </div>

          </div>

        </div>

        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Conversation
          </h2>

          <TicketChat
            messages={ticket.messages}
          />

        </div>

        <div className="bg-white p-6 rounded-xl shadow mt-8">

          <div className="flex gap-4 mb-4">

            <button
              onClick={handleGenerateAI}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Generate AI Reply
            </button>

          </div>

          <textarea
            rows="8"
            className="w-full border p-4 rounded"
            placeholder="Write reply..."
            value={reply}
            onChange={(e) =>
              setReply(e.target.value)
            }
          />

          <button
            onClick={handleReply}
            className="mt-4 bg-black text-white px-6 py-3 rounded"
          >
            Send Reply
          </button>

        </div>

      </div>

    </div>
  );
};

export default TicketDetails;