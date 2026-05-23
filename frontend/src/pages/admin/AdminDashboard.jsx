import Navbar from "../../components/common/Navbar";

const AdminDashboard = () => {

  return (
    <div>

      <Navbar />

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Total Tickets
            </h2>

            <p className="text-3xl font-bold mt-3">
              35
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Critical Issues
            </h2>

            <p className="text-3xl font-bold mt-3">
              5
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold">
              Open Tickets
            </h2>

            <p className="text-3xl font-bold mt-3">
              12
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;