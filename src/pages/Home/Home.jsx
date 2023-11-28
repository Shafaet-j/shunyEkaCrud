import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../../provider/ContextProvider";

const Home = () => {
  const { handleDelete, users } = useContext(Context);

  return (
    <section className="">
      <Helmet>
        <title>ShunyEka</title>
      </Helmet>
      <h1 className=" text-5xl font-bold my-20">All Users {users.length}</h1>
      <div className=" container mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>
                    <Link to={`/details/${user._id}`}>
                      {" "}
                      <button className=" btn btn-success">
                        View User
                      </button>{" "}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/update/${user._id}`}>
                      <button className="btn btn-outline btn-success">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
