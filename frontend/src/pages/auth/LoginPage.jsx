import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";

import useAuth from "../../hooks/useAuth";

const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await loginUser(formData);

      login(res.data.user, res.data.token);

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {

      alert(
        error.response?.data?.message || "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          BookLeaf Portal
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4"
          onChange={handleChange}
        />

        <button
          className="w-full bg-black text-white p-3 rounded"
        >
          {
            loading
              ? "Please wait..."
              : "Login"
          }
        </button>

      </form>

    </div>
  );
};

export default LoginPage;