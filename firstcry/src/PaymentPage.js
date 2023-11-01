import React from "react";

import PaymentPagestyle from "./PaymentPagestyle.css";
import { useParams } from "react-router-dom";
function PaymentPage() {
  const { id} = useParams();
  console.log(id)
  return (
    <div>
      <form class="row g-3 bg-dark p-2 text-dark bg-opacity-75 payment">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Card Number"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Name On Card"
          />
        </div>

        <div class="col-md-3">
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select" id="validationDefault04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-3">
          <div class="col-md-6">
            <input
              type="password"
              class="form-control"
              placeholder="ccv"
              id="inputPassword4"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12 ">
          <button class="btn btn-primary paynow" type="submit">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
