import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

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

      const res = await API.get(
        `/tickets/my-tickets`
      );

      const foundTicket =
        res.data.tickets.find(
          (item) => item._id === id
        );

      setTicket(foundTicket);

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

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-bold">
              {ticket.subject}
            </h1>

            <span className="bg-black text-white px-4 py-1 rounded">
              {ticket.priority}
            </span>

          </div>

          <p className="mt-5 text-gray-700">
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

      </div>

    </div>
  );
};

export default TicketDetails;