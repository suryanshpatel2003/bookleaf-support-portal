const TicketFilters = () => {

  return (
    <div className="flex gap-4 mb-5">

      <select className="border p-2 rounded">

        <option>
          All Status
        </option>

      </select>

      <select className="border p-2 rounded">

        <option>
          All Priority
        </option>

      </select>

    </div>
  );
};

export default TicketFilters;