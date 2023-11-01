import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cartstyle from "./Cartstyle.css";
import Cartcomponent from "./Cartcomponent";

function Cart() {
  const [viewcart, setcart] = useState([]);
  const cusid = localStorage.getItem("customerid");
  let navigate=useNavigate();
  const [submitvalue, setsub] = useState(false);
  let [Paymenttype, setpaymenttype] = useState('');
// console.log(Paymenttype)
  useEffect(() => {
    localStorage.setItem("TotalPrice", 0);
    console.log(Paymenttype)

    axios
      .post(`http://localhost:3000/viewallcart/${cusid}`)
      .then((a) => {
        setcart(a.data.Data);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  const changepaymentfn = (e) => {
    console.log(e.target.value);
    setpaymenttype(e.target.value);

  };

  const [dataFromChild, setDataFromChild] = useState([]);
  const [total, settotal] = useState();

  useEffect(() => {
    const x = [];
    for (let i in viewcart) {
      x.push(0);
      setDataFromChild(x);
    }
  }, []);

  const handleChildData = (childData, indexvalue) => {
    const x = dataFromChild;
    x.splice(indexvalue, 1, parseFloat(childData));
    let sumvalue = 0;
    for (let i of x) {
      sumvalue += i;
    }
    settotal(sumvalue);
    setDataFromChild(x);
  };

  return (
    <div>
      <div
        class="container text-center cartstyle"
        style={{ marginTop: "2rem" }}
      >
        <div class="row">
          {viewcart.length ? (
            viewcart.map((e, index) => {
              return (
                <>
                  <Cartcomponent
                    data={e}
                    submitvalue={submitvalue}
                    Payment={Paymenttype}
                    onChildData={handleChildData}
                    indexvalue={index}
                  />
                </>
              );
            })
          ) : (
            <div class="col-12">
              <div class="card" style={{ marginTop: "2rem" }}>
                <div class="card-body">
                  <h5 class="card-title">No Data to display</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        class="card text-center mb-3 ordersummery"
        style={{ width: "5rem;" }}
      >
        <form>
          <div class="card-body ">
            <h3 class="card-title">Order Summary</h3>
            <hr />
            <h5>Order total: ₹{Math.floor(total)}</h5>
            <br />
            <input
              type="radio"
              name="paymenttype"
              required
              value="Cash on delivery"
              onChange={changepaymentfn}
            />
            Cash on delivery
            <br />
            <input
              type="radio"
              name="paymenttype"
              value="Debit card/Credit card"
              required
              onChange={changepaymentfn}
            />
            Debit card/Credit card
            <br />
            <button
              class="btn btn-primary"
              type="button"
              onClick={() => {
                if (Paymenttype.length) {
                  alert('Add delivery address')
                  navigate('/DeliveryAdress')
                  setsub(true);
                } else {
                  alert("Select a payment type");
                }
              }}
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cart;
