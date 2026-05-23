import API from "./axios";

export const createTicket = async (data) => {
  return await API.post("/tickets/create", data);
};

export const getMyTickets = async () => {
  return await API.get("/tickets/my-tickets");
};

export const getAllTickets = async (
  filters = {}
) => {

  const query =
    new URLSearchParams(filters).toString();

  return await API.get(
    `/tickets/admin/all?${query}`
  );

};

export const generateAIDraft = async (id) => {
  return await API.get(`/tickets/admin/ai-draft/${id}`);
};

export const replyTicket = async (id, data) => {
  return await API.post(`/tickets/admin/reply/${id}`, data);
};

export const updateTicketStatus = async (
  id,
  data
) => {

  return await API.put(
    `/tickets/admin/status/${id}`,
    data
  );

};

export const saveInternalNote = async (
  id,
  data
) => {

  return await API.put(
    `/tickets/admin/internal-note/${id}`,
    data
  );

};

export const assignTicketToMe = async (
  id
) => {

  return await API.put(
    `/tickets/admin/assign/${id}`
  );

};