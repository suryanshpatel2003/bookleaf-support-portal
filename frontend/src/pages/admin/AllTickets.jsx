import { useEffect, useState } from "react";

import Navbar from "../../components/common/Navbar";

import {
  getAllTickets,
  generateAIDraft,
} from "../../api/ticketApi";

const AllTickets = () => {

  const [tickets, setTickets] = useState([]);

  const [aiReply, setAIReply] = useState("");

  useEffect(() => {

    fetchTickets();

  }, []);

  const fetchTickets = async () => {

    try {

      const res = await getAllTickets();

      setTickets(res.data.tickets);

    } catch (error) {

      console.log(error);

    }
  };

  const handleGenerateReply = async (id) => {

    try {

      const res = await generateAIDraft(id);

      setAIReply(res.data.aiReply);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          All Tickets
        </h1>

        <div className="space-y-5">

          {
            tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white p-5 rounded-xl shadow"
              >

                <div className="flex justify-between">

                  <h2 className="text-xl font-bold">
                    {ticket.subject}
                  </h2>

                  <span className="bg-red-500 text-white px-3 py-1 rounded">
                    {ticket.priority}
                  </span>

                </div>

                <p className="mt-3">
                  {ticket.description}
                </p>

                <button
                  onClick={() =>
                    handleGenerateReply(ticket._id)
                  }
                  className="mt-4 bg-black text-white px-5 py-2 rounded"
                >
                  Generate AI Reply
                </button>

              </div>
            ))
          }

        </div>

        {
          aiReply && (
            <div className="bg-white p-6 rounded-xl shadow mt-8">

              <h2 className="text-2xl font-bold mb-4">
                AI Draft Response
              </h2>

              <p>
                {aiReply}
              </p>

            </div>
          )
        }

      </div>

    </div>
  );
};

export default AllTickets;