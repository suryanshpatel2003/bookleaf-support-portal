import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const { user, logout } = useAuth();

  return (
    <div className="bg-black text-white px-6 py-4 flex justify-between">

      <h1 className="text-xl font-bold">
        BookLeaf
      </h1>

      <div className="flex gap-5 items-center">

        {
          user?.role === "author" && (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/books">
                Books
              </Link>

              <Link to="/tickets">
                Tickets
              </Link>

              <Link to="/submit-ticket">
                Submit Ticket
              </Link>
            </>
          )
        }

        {
          user?.role === "admin" && (
            <>
              <Link to="/admin/dashboard">
                Dashboard
              </Link>

              <Link to="/admin/tickets">
                Tickets
              </Link>
            </>
          )
        }

        <button
          onClick={logout}
          className="bg-white text-black px-4 py-1 rounded"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Navbar;