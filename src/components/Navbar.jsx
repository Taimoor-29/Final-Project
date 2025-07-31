import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { supabase } from "../supabaseClient";

const Navbar = () => {
  const { session } = useSession();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-green-100 bg-opacity-90 backdrop-blur-md py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-50 shadow-md border-b border-green-200">
      <Link to="/" className="text-2xl font-bold text-green-900 font-serif tracking-wide">
        RecipeRemedy
      </Link>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-green-800 hover:text-green-900 font-medium transition">Home</Link>
        <Link to="/about" className="text-green-800 hover:text-green-900 font-medium transition">About</Link>

        {session ? (
          <>
            <span className="text-sm text-green-700">{session.user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
