const Ticket = require("../models/Ticket.model");

const getAdminDashboard = async (req, res) => {
  try {

    const totalTickets = await Ticket.countDocuments();

    const openTickets = await Ticket.countDocuments({
      status: "Open",
    });

    const criticalTickets = await Ticket.countDocuments({
      priority: "Critical",
    });

    return res.status(200).json({
      success: true,
      stats: {
        totalTickets,
        openTickets,
        criticalTickets,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAdminDashboard,
};