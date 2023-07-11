import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const id = form.id.value;
    const newUser = { name, email, phone, id };
    fetch("https://shuny-eka-server-shafaet-j.vercel.app/createUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Helmet>
        <title>ShunyEka || Add User</title>
      </Helmet>
      <div className=" container mx-auto">
        <h2 className=" text-5xl font-bold my-20">Add your Users</h2>
        <form onSubmit={handleAddUser} className=" mx-auto w-2/3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
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
                name="phone"
                placeholder="User Phone"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Id</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="id"
                placeholder="User Id"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-primary w-full mt-6"
          />
        </form>
      </div>
    </>
  );
};

export default AddUser;
