import { useEffect, useState } from "react";

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

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Tickets
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

                  <span className="bg-black text-white px-3 py-1 rounded">
                    {ticket.priority}
                  </span>

                </div>

                <p className="mt-3">
                  {ticket.description}
                </p>

                <p className="mt-3">
                  Category:
                  {ticket.category}
                </p>

                <p>
                  Status:
                  {ticket.status}
                </p>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
};

export default MyTickets;