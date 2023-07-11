import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [control, setControll] = useState(false);
  useEffect(() => {
    fetch("https://shuny-eka-server-shafaet-j.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [control]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shuny-eka-server-shafaet-j.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Your User has been deleted.");
              setControll((prev) => !prev);
            }
          });
      }
    });
  };

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
