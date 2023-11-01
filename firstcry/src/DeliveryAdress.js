import React, { useState } from "react";
import DeliveryStyle from "./DeliveryStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeliveryAdress() {
  let navigate=useNavigate()
  const [address,setaddress]=useState({
    FullName:'',
    HouseNumber:'',
    StreetAddress:'',
    Landmark:'',
    Pincode:'',
    City:'',
    State:'',
    MobileNumber:''
  })
  const submit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/Adddeliveryaddress',address)
    .then((a)=>{
      console.log(a)
      alert("Address Added sucessfully")
      navigate('/Cart')
    })
    .catch((b)=>{
      console.log(b)
    })
  }

  const change=(e)=>{
    console.log(e.target)
    setaddress({...address,[e.target.name]:e.target.value})
  }
  return (
   <div
      className="bg-warning p-2 text-dark bg-opacity-50"
      style={{ height: "60rem" }}
    >
      <form className="adressform" onSubmit={submit}>
        <h5>
          <i class="bi bi-arrow-left"></i>Add New Delivery Address{" "}
          <i class="bi bi-x-lg cancelicon"></i>
        </h5>

        <hr />
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Recipient's Full Name*
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            required
            name="FullName"
            placeholder="Recipient's Full Name*"
            onChange={change}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            House No/Flat/Building*
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            required
            name="HouseNumber"
            placeholder="House No/Flat/Building*"
            onChange={change}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Street Address/Colony Details*
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            required
            name="StreetAddress"
            placeholder="Street Address/Colony Details*"
            onChange={change}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Landmark
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            required
            name="Landmark"
            placeholder="Landmark"
            onChange={change}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Pincode*
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            required
            name="Pincode"
            placeholder="Pincode*"
            onChange={change}
          />
        </div>

        <div class="row">
          <div class="col">
            <label for="formGroupExampleInput2" class="form-label">
              City*
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="City*"
              required
              name="City"
              aria-label="First name"
              onChange={change}
            />
          </div>
          <div class="col">
            <label for="formGroupExampleInput2" class="form-label">
              State*
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="State*"
              required
              name="State"
              aria-label="Last name"
              onChange={change}
            />
          </div>
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Mobile No. (For contact during delivery)
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            required
            name="MobileNumber"
            placeholder="Mobile Number"
            onChange={change}
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              required
              type="checkbox"
              id="gridCheck"
            />
            <label class="form-check-label" for="gridCheck">
              Make this as my default address
            </label>
          </div>
        </div>

        <div class="row">
          <div class="col"></div>
          <div class="col">
            <button type="submit" class="btn btn-danger savebtn">
              SAVE ADDRESS
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeliveryAdress;
