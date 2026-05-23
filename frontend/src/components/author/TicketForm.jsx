const TicketForm = ({
  formData,
  handleChange,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full border p-3 rounded mb-4"
        value={formData.subject}
        onChange={handleChange}
      />

      <textarea
        name="description"
        rows="6"
        placeholder="Describe issue"
        className="w-full border p-3 rounded mb-4"
        value={formData.description}
        onChange={handleChange}
      />

      <button
        className="bg-black text-white px-6 py-3 rounded"
      >
        Submit Ticket
      </button>

    </form>
  );
};

export default TicketForm;