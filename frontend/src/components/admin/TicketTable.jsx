const TicketTable = ({ tickets }) => {

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-black text-white">

          <tr>
            <th className="p-4 text-left">
              Subject
            </th>

            <th className="p-4 text-left">
              Category
            </th>

            <th className="p-4 text-left">
              Priority
            </th>

            <th className="p-4 text-left">
              Status
            </th>
          </tr>

        </thead>

        <tbody>

          {
            tickets.map((ticket) => (
              <tr
                key={ticket._id}
                className="border-b"
              >

                <td className="p-4">
                  {ticket.subject}
                </td>

                <td className="p-4">
                  {ticket.category}
                </td>

                <td className="p-4">
                  {ticket.priority}
                </td>

                <td className="p-4">
                  {ticket.status}
                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
};

export default TicketTable;