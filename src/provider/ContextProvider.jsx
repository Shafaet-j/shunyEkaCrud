import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
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
    <Context.Provider value={{ users, handleDelete, setControll }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
