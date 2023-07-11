import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const users = useLoaderData();
  console.log(users);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const newUser = { name, email, phone };
    fetch(`https://shuny-eka-server-shafaet-j.vercel.app/update/${users._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "User updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>ShunyEka || Update User</title>
      </Helmet>
      <div className=" container mx-auto">
        <h2 className=" text-5xl font-bold my-20">Update your Users</h2>
        <form onSubmit={handleUpdateUser} className=" mx-auto w-2/3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                defaultValue={users.name}
                type="text"
                placeholder="User name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                name="email"
                type="email"
                defaultValue={users.email}
                placeholder="User email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Phone</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={users.phone}
                name="phone"
                placeholder="User Phone"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update User"
            className="btn btn-outline w-full btn-success mt-6"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
