import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_ENDPOINT } from "../constant";
import "./admin.css";
function Admin() {
  const [users, setUsers] = useState([]);

  const getCallback = useCallback(() => {
    const getUsers = async () => {
      await axios
        .get(`/api/user/readall`)

        .then((res) => {
          console.log(res.data.users);
          setUsers(res.data.users);
        });
    };
    getUsers();
  }, []);
  useEffect(() => {
    getCallback();
  }, []);
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure to delete a file")) {
      await axios
        .delete(`/api/user/delete/${id}`, {})
        .then((res) => {
          console.log(res.data.msg);
          window.location.reload();
        })
        .catch((err) => err.response.data.msg);
    }
  };
  return (
    <div className="admin">
      <h1 style={{ textAlign: "center" }}>Admin DashBoard</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete User</th>
        </tr>
        {users &&
          users.map((item, index) => {
            return (
              <tr>
                <td>
                  <h3 key={index}>{item.name}</h3>
                </td>
                <td>
                  <h3>{item.email}</h3>
                </td>
                  <td> <NavLink className='nav' to={`/update/${item._id}`}>
                  <button>Edit Details</button>
                </NavLink></td>
               
                <td onClick={() => deleteUser(item._id)}>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Admin;
