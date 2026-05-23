import API from "./axios";

export const getAdminDashboard = async () => {
  return await API.get("/admin/dashboard");
};