import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../constant";

function Update() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ENDPOINT}/api/user/read/` + id);
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/user/update/${id}` , { name, email })
      .then((res) => {
        console.log(res);
        navigate("/admin")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update details</h1>
      <form action="" onSubmit={handleUpdate}>
        <div className="right">
          <div className="form-group mt-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="submit"
              value="Login"
              className="form-control btn btn-outline-info mt"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Update;
