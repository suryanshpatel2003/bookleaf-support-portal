import { useState } from "react";
import AuthorLayout from "../../layouts/AuthorLayout"; // Layout component wrapped
import Navbar from "../../components/common/Navbar";
import { createTicket } from "../../api/ticketApi";

const SubmitTicket = () => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket(formData);
      alert("Ticket Created");
      setFormData({ subject: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthorLayout>
      <Navbar />
      <div className="max-w-3xl mx-auto py-4 flex justify-center">
        <div className="relative group w-full max-w-xl">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500" />

          <div className="relative backdrop-blur-xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/50 to-purple-500/50" />
            
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
              Submit Ticket
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="subject"
                placeholder="Subject Headline"
                required
                className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                name="description"
                placeholder="Describe your issue in details..."
                rows="6"
                required
                className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium resize-none"
                value={formData.description}
                onChange={handleChange}
              />

              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg shadow-indigo-600/10">
                Create Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthorLayout>
  );
};

export default SubmitTicket;