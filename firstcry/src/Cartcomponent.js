import axios from "axios";
import React, { useEffect, useState } from "react";

function Cartcomponent({
  data,
  submitvalue,
  Payment,
  onChildData,
  indexvalue,
}) {
  const [price2, setprice2] = useState(0);

  const [finaldata, setdata] = useState({
    Paymenttype: Payment,
    productid: data.productid._id,
    customerid: localStorage.getItem("customerid"),
    count: 1,
    Totalprice: price2,
  });

  const sendDataToParent = () => {
    onChildData(price2, indexvalue);
  };

  useEffect(() => {
    if (finaldata.count == 0) {
      setprice2(data.productid.Price);
    } else {
      setprice2(data.productid.Price * finaldata.count);
    }
  }, [finaldata.count]);

  useEffect(() => {
    sendDataToParent();
  }, [price2]);

  useEffect(() => {
    let x = localStorage.getItem("TotalPrice");
    localStorage.setItem("TotalPrice", parseFloat(x) + parseFloat(price2));

    // console.log(localStorage.getItem("TotalPrice"));
  }, [price2]);

  const delfn = (id) => {
    axios
      .post(`http://localhost:3000/removecartproduct/${id}`)
      .then((a) => {
        console.log("Deleted", a);
        if (a.status == 200) window.location.reload(false);
      })
      .catch((b) => {
        console.log("Error", b);
      });
  };

  const subfn = () => {
    // console.log(Payment);
    finaldata.Paymenttype=Payment
    console.log(finaldata);
    axios
      .post("http://localhost:3000/orderproducts", finaldata)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          console.log("Order added");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="card mb-3 cartsize" style={{ "max-width": "800px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={`http://localhost:3000/${data.productid.Image.filename}`}
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <b class="card-title">{"Product Id:" + data.productid._id}</b>
            <p class="card-title">{data.productid.ProductName}</p>
            <p class="card-text">Total Price : ₹{price2}</p>
            <div className="dropdown">
              <label>Qty:</label>
              <select
                name="count"
                onChange={(e) => {
                  setdata({ ...finaldata, count: e.target.value });
                }}
              >
                <option value="1">1 </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <button
                className="removebutton"
                onClick={() => {
                  delfn(data._id);
                }}
              >
                Remove{" "}
              </button>
              <p onClick={submitvalue ? subfn() : null}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartcomponent;
