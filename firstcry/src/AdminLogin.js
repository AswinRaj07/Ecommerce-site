import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  let navigate = useNavigate();
  const [login, setlogin] = useState({
    EmailId: "",
    Password: "",
  });
  console.log(login);
  const inputdata = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };
  const change = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/adminLogin", login)
      .then((a) => {
        console.log(a);
        alert("Login succes");
        navigate("/AdminPage");
      })
      .catch((b) => {
        console.log(b);
      });
  };

  return (
    <div>
      <div class=" maindiv">
        <form className="emaildiv" onSubmit={change}>
          <div className="loginregisterdiv">
            <h3>Admin Login</h3>
          </div>
          <div class="form-floating mb-3 inputsposition">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              name="EmailId"
              placeholder="name@example.com"
              onChange={inputdata}
            />
            <label for="floatingInput">EmailId</label>
          </div>
          <div class="form-floating inputsposition">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              name="Password"
              placeholder="Password"
              onChange={inputdata}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="d-grid gap-2 loginbutton">
            <button class="btn p-3 mb-2 bg-danger text-white" type="submit">
              CONTINUE
            </button>
          </div>
          <div className="registerlinkdiv">
            <a href="" className="tag">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
