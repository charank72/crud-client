import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../constant";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const userRead = useCallback(() => {
    const users = async () => {
      await axios
        .get(`/api/user/read/${id}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data.user);
        })
        .catch((err) => err.response.data.msg);
    };
    users();
  }, []);
  useEffect(() => {
    userRead();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
        User details
      </h1>
      <div style={{ textAlign: "left" ,marginLeft:'12em'}}>
        <h1>User Name:{user.name}</h1>
        <h1>User Email:{user.email}</h1>
      </div>
    </div>
  );
}

export default User;
