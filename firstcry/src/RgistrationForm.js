import React, { useState } from "react";
import axios from "axios";
import RegisterFormstl from "./RegisterFormstl.css";
import { Link, useNavigate } from "react-router-dom";
function RgistrationForm() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    FullName: "",
    MobileNumber: "",
    EmailId: "",
    Password: "",
  });
  const click = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Registerhere", register)
      .then((data) => {
        console.log(data);
        navigate("/UserLogin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goLogin = (data) => {
    console.log(data.target);
    setRegister({ ...register, [data.target.name]: data.target.value });
  };

  return (
    <div class=" maindiv">
      <form className=" formsizediv" onSubmit={click}>
        <div className="registerdiv">
          <h3>
            <Link to={"/UserLogin"}>
              <svg
                id="i-chevron-left"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                width="28"
                height="28"
                fill="none"
                stroke="currentcolor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M20 30 L8 16 20 2" />
              </svg>
            </Link>
            Register
          </h3>
        </div>
        <div class="mb-3 inputsize">
          <label for="formGroupExampleInput" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Full Name"
            name="FullName"
            onChange={goLogin}
          />
        </div>
        <div class="mb-3 inputsize">
          <label for="formGroupExampleInput2" class="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your Mobile Number"
            name="MobileNumber"
            onChange={goLogin}
          />
        </div>
        <div class="mb-3 inputsize">
          <label for="formGroupExampleInput" class="form-label">
            Email ID
          </label>
          <input
            type="email"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Your Email ID"
            name="EmailId"
            onChange={goLogin}
          />
        </div>
        <div class="mb-3 inputsize">
          <label for="formGroupExampleInput2" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Your Password"
            name="Password"
            onChange={goLogin}
          />
        </div>
        <div class="d-grid gap-2  continuebutton">
          <button class="btn btn p-3 mb-2 bg-danger text-white" type="submit">
            CONTINUE
          </button>
        </div>
      </form>
    </div>
  );
}

export default RgistrationForm;
