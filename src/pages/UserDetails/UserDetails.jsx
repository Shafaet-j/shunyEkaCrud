import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <section className=" container mx-auto">
       <Helmet>
        <title>ShunyEka || User Details</title>
      </Helmet>
      <table className="table mt-20">
        <tbody>
          <tr>
            <th>{users.id}</th>
            <td>{users.name}</td>
            <td>{users.phone}</td>
            <td>{users.email}</td>
           
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UserDetails;
