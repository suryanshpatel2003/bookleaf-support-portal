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
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-slate-100 overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Background Cinematic Ambient Lights (Blobs) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-[8000ms]" />

      {/* Main Glassmorphic Wrapper Card */}
      <div className="relative group w-full max-w-[420px] mx-4">
        {/* Subtle Outer Neon Edge Glow on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        
        <form
          onSubmit={handleSubmit}
          className="relative backdrop-blur-xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 sm:p-10 rounded-2xl border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col w-full"
        >
          {/* Top Decorative Aesthetic Strip */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50" />

          {/* Header Branding */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              BookLeaf Portal
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-2">
              Secure Gateway Access
            </p>
          </div>

          {/* Form Fields Stack */}
          <div className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium"
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                className="w-full bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-600 p-3.5 pl-4 rounded-xl focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200 text-sm font-medium"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            disabled={loading}
            className="w-full mt-8 relative overflow-hidden px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_25px_rgba(99,102,241,0.25)] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                {/* Modern UI Micro Spinner */}
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>

    </div>
  );
};

export default LoginPage;