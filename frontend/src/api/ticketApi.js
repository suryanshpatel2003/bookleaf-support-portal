import API from "./axios";

export const createTicket = async (data) => {
  return await API.post("/tickets/create", data);
};

export const getMyTickets = async () => {
  return await API.get("/tickets/my-tickets");
};

export const getAllTickets = async () => {
  return await API.get("/tickets/admin/all");
};

export const generateAIDraft = async (id) => {
  return await API.get(`/tickets/admin/ai-draft/${id}`);
};

export const replyTicket = async (id, data) => {
  return await API.post(`/tickets/admin/reply/${id}`, data);
};