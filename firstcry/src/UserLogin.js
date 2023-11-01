import React, { useState } from "react";
import UserLoginstyle from "./UserLoginstyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserLogin() {
  let navigate = useNavigate();
  const [login, setLogin] = useState({
    EmailId: "",
    Password: "",
  });
  const change = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/logIn", login)
      .then((data) => {
        console.log(data);
        localStorage.setItem("customerid", data.data.Data._id);
        alert("Login Sucess");
         navigate("/Home");
         window.location.reload()
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid data");
        // navigate("/RegistrationForm")
      });
  };

  const input = (data) => {
    console.log(data.target);
    setLogin({ ...login, [data.target.name]: data.target.value });
  };

  return (
    <div class="maindiv">
      <form className="emaildiv" onSubmit={change}>
        <div className="loginregisterdiv">
          <h3>Login / Register</h3>
        </div>
        <div class="form-floating mb-3 inputsposition">
          <input
            type="text"
            required
            class="form-control"
            id="floatingInput"
            name="EmailId"
            placeholder="name@example.com"
            onChange={input}
          />
          <label for="floatingInput">EmailId</label>
        </div>
        <div class="form-floating inputsposition">
          <input
            type="password"
            required
            class="form-control"
            id="floatingPassword"
            name="Password"
            placeholder="Password"
            onChange={input}
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="d-grid gap-2 loginbutton">
          <button class="btn p-3 mb-2 bg-danger text-white" type="submit">
            CONTINUE
          </button>
        </div>
        <div className="registerlinkdiv">
          <Link to="/RegistrationForm" className="tag">
            New to FirstCry? Register Here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
