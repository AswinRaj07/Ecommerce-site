import React, { useEffect, useState } from "react";
import HomeStyle from "./HomeStyle.css";
import img2 from "./img2.webp";
import img1 from "./img1.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [viewproducts, setAllproducts] = useState([]);
  const cust = localStorage.getItem("customerid");
  const [filteredItems, setFilteredItems] = useState([]);

  let navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:3000/viewallproducts")
      .then((a) => {
        if (a.data.AllProducts !== undefined) {
          setAllproducts(a.data.AllProducts);
          setFilteredItems(a.data.AllProducts);
        }
        console.log(a.data);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);
  const click = (id) => {
    if (cust != null) {
      axios
        .post(`http://localhost:3000/cart/${cust}/${id}`)
        .then((a) => {
          console.log(a);
          alert("Product added sucessfully");
          // navigate('/UserLogin ')
        })
        .catch((b) => {
          console.log(b);
          if (b.response.data.status == 500) {
            alert("The product already is in your Cart !!!!");
          }
        });
    } else {
      alert("Please Login");
      navigate("/UserLogin");
    }
  };
  const setsearchfn = (e) => {
    const filtereddata = viewproducts.filter((item) => {
      return item.Category.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(filtereddata);
    if (filtereddata.length == 0) {
      setFilteredItems([]);
    } else {
      setFilteredItems(filtereddata);
    }
  };

  return (
    <div class="bg-light.bg  p-2 text-dark bg-opacity-25">
      <form
        class="d-flex"
        role="search"
        style={{ width: "500px", margin: "20px auto" }}
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search for Categories"
          aria-label="Search"
          onChange={setsearchfn}
        />
      </form>
      <div className="carouseldiv ">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img2} class="d-block w-100 sliderimg" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img5} class="d-block w-100" alt="..." />
            </div>
          </div>
          <br />
          <hr />

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          {filteredItems.length ? (
            filteredItems.map((e) => {
              return (
                <div class="col-3">
                  <div class="card" style={{ marginTop: "1rem" }}>
                    <img
                      src={`http://localhost:3000/${e.Image.originalname}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-title">{e.ProductName}</p>
                      <p class="card-title">{"₹" + e.Price}</p>
                    </div>

                    <div class="card-body">
                      <button
                        className="add"
                        onClick={() => {
                          click(e._id);
                        }}
                      >
                        Add To Cart
                      </button>
                      {/* <button className="buy" onClick={()=>{navigate('/UserLogin')}}>Buy Now</button> */}
                    </div>
                  </div>
                </div>
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
    </div>
  );
}

export default Home;
