import Sidebar from "../components/common/Sidebar"; // Apne folder path ke hisab se check kar lena

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-slate-100 font-sans">
      {/* Sidebar fixed docked rahega left me */}
      <Sidebar />
      
      {/* Main Panel Content View Area */}
      <main className="transition-all duration-300 md:pl-64">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;