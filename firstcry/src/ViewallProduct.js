import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ViewallProductstyle from "./ViewallProductstyle.css";
import { useNavigate } from "react-router-dom";

function ViewallProduct() {
  const [viewProduct, setProduct] = useState([{}]);
  const [test, settest] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:3000/viewallproducts")
      .then((a) => {
        if (a.data.AllProducts != undefined) {
          setProduct(a.data.AllProducts);
          settest("hello");
        }
        console.log(a.data);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  const delfn = (id) => {
    axios
      .post(`http://localhost:3000/deleteproduct/${id}`)
      .then((a) => {
        console.log("Deleted", a);
        if (a.status == 200) window.location.reload(false);
      })
      .catch((b) => {
        console.log("Error", b);
      });
  };
  const editfn = (id) => {

    navigate(`/EditProduct/${id}`);

    // axios
    //   .post(`http://localhost:3000/viewProductById/`)
    //   .then((a) => {
    //     console.log("Edit Product", a);
    //   })
    //   .catch((b) => {
    //     console.log("Error", b);
    //   });
  };

  return (
    <div>
      {" "}
      <div>
        <div class="container text-center">
          <div class="row">
            {test.length
              ? viewProduct.map((e) => {
                  return (
                    <div class="col-3">
                      <div class="card" style={{ marginTop: "2rem" }}>
                        <img
                          src={`http://localhost:3000/${e.Image.originalname}`}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{e.ProductName}</h5>
                          <p class="card-text"></p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">{"$" + e.Price}</li>
                          <li class="list-group-item">
                            {"Size" + e.ProductSize}
                          </li>
                        </ul>
                        <div class="card-body">
                          <button
                            className="edit"
                            onClick={() => {
                              editfn(e._id);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="remove"
                            onClick={() => {
                              delfn(e._id);
                            }}
                          >
                            Remove{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewallProduct;
