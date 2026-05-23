import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

import Dashboard from "../pages/author/Dashboard";

import MyBooks from "../pages/author/MyBooks";

import MyTickets from "../pages/author/MyTickets";

import SubmitTicket from "../pages/author/SubmitTicket";

import AdminDashboard from "../pages/admin/AdminDashboard";

import AllTickets from "../pages/admin/AllTickets";

import ProtectedRoute from "./ProtectedRoute";

import RoleRoute from "./RoleRoute";

import AuthProvider from "../context/AuthContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>

          <Route
            path="/"
            element={<LoginPage />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <RoleRoute role="author">
                  <Dashboard />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <RoleRoute role="author">
                  <MyBooks />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/tickets"
            element={
              <ProtectedRoute>
                <RoleRoute role="author">
                  <MyTickets />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/submit-ticket"
            element={
              <ProtectedRoute>
                <RoleRoute role="author">
                  <SubmitTicket />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <AdminDashboard />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/tickets"
            element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <AllTickets />
                </RoleRoute>
              </ProtectedRoute>
            }
          />

        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;