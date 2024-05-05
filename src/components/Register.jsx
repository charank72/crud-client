import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const femail = useRef();
  const fpass = useRef();
  const fname = useRef();

  const navigate=useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name: fname.current.value,
        email: femail.current.value,
        password: fpass.current.value,
      };
      console.log(data);
      await axios
        .post("/api/user/create", data)
        .then((res) => {
          console.log(res.data.user);
  
          // setToken(res.data.user.token);
  
          navigate(`/`);
        })
       
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form autoComplete="off" className="login" onSubmit={submitHandler}>
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
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={fname}
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

export default Register;
