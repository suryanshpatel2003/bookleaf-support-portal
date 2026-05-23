import { useState } from "react";

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

      setFormData({
        subject: "",
        description: "",
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <div className="bg-white p-6 rounded-xl shadow max-w-xl">

          <h1 className="text-3xl font-bold mb-5">
            Submit Ticket
          </h1>

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
              placeholder="Describe your issue"
              rows="6"
              className="w-full border p-3 rounded mb-4"
              value={formData.description}
              onChange={handleChange}
            />

            <button
              className="bg-black text-white px-6 py-3 rounded"
            >
              Create Ticket
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default SubmitTicket;