import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" shadow-lg w-full py-3">
      <nav className=" flex justify-between items-center container mx-auto">
        <Link className=" text-xl font-bold text-primary" to="/">
          ShunyEka
        </Link>
        <div>
          <Link to="/addUser">
            <button className=" btn btn-primary">Add User</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
