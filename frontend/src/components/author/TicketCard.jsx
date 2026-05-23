const TicketCard = ({ ticket }) => {

  return (
    <div className="bg-white p-5 rounded-xl shadow">

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
        Status:
        {ticket.status}
      </p>

    </div>
  );
};

export default TicketCard;