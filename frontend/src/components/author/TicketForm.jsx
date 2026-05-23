const TicketForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject Headline"
          required
          className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div>
        <textarea
          name="description"
          rows="6"
          placeholder="Describe your issue in details..."
          required
          className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium resize-none"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg shadow-indigo-600/10">
        Submit Ticket
      </button>
    </form>
  );
};

export default TicketForm;