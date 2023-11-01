
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BoysDetail() {
    let navigate = useNavigate();
    const [product, setProduct] = useState({
      ProductName: "",
      Price: "",
      Image: "",
      ProductSize: "",
      Category: "",
    });
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
      axios
        .post(`http://localhost:3000/viewProductById/${id}`)
        .then((a) => {
          console.log(a.data.Data.ProductName);
          setProduct(a.data.Data);
          console.log(product);
        })
        .catch((b) => {
          console.log(b);
        });
    },[]);
 
     

  return (
    <div>
      <div class="card mb">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={`http://localhost:3000/${product.Image.filename}`}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{product.ProductName}</h5>
              <p>fhggrkbgh</p>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>2 - 3 Y  3 - 4 Y  4 - 5 Y  5 - 6 Y  6 - 7 Y  7 - 8 Y</p>
              <p class="card-text">
                <small class="text-body-secondary">{product.Price}</small>
              </p>
              <p>asdfghjkl</p>
            </div>
            <div class="card-body">
              <button className="add">Add To Cart</button>
              <button
                className="buy"
                onClick={() => {
                  navigate("/UserLogin");
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoysDetail
