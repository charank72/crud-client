import React, { useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_ENDPOINT } from "../constant";
import "./login.css";
function Login() {
  const femail = useRef();
  const fpass = useRef();
  const navigate = useNavigate();
  const authenticateUser = async (user,id) => {
    await axios
      .post(`/api/user/login`, user)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.user.username);
        // navigate("/");
        localStorage.setItem("email", res.data.user.email);
        if (res.data.user.role === "admin") {
          navigate("/admin");
        } else {
          console.log("user");
          navigate(`/user/${res.data.user.id}`);
        }
      })
      .catch((err) => err);
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email: femail.current.value,
        password: fpass.current.value,
      };
      // console.log(data);
      authenticateUser(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form autoComplete="off" className="login" onSubmit={submit}>
        <div className="left">
          <img
            src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif"
            alt=""
          />
        </div>
        <div className="right">
          <div className="form-group mt-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={femail}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={fpass}
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

export default Login;
