import AdminLayout from "../../layouts/AdminLayout"; 
import DashboardStats from "../../components/admin/DashboardStats"; 
import Navbar from "../../components/common/Navbar"; 

const AdminDashboard = () => {
  const statsData = [
    { title: "Total Tickets", value: "35", type: "primary" },
    { title: "Critical Issues", value: "5", type: "danger" },
    { title: "Open Tickets", value: "12", type: "warning" },
  ];

  return (
    <AdminLayout>
      {/* 1. Global Navbar yahan render hoga */}
      <Navbar />

      {/* 2. Main content area bina kisi extra container grid crash ke */}
      <div className="max-w-7xl mx-auto py-6 sm:py-10 transition-all duration-300">
        
        {/* Cinematic Header Section */}
        <div className="relative mb-12 pl-4 md:pl-0">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-full blur-[2px]" />
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-xs text-slate-400 mt-2 tracking-wide font-medium uppercase">
            System Overview & Real-time Metrics
          </p>
        </div>

        {/* Responsive Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <DashboardStats 
              key={index} 
              title={stat.title} 
              value={stat.value} 
              type={stat.type}
            />
          ))}
        </div>

      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;