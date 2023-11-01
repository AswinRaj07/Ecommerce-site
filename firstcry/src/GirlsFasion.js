import React, { useEffect, useState } from "react";
import girls1 from "./Images/girls1.jpg";
import girls2 from "./Images/girls2.jpg";
import girls3 from "./Images/girls3.jpg";
import girls4 from "./Images/girls4.jpg";
import girls5 from "./Images/girls5.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GirlsFasion() {
  const [Girlsfashion, setGirlsfashion] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  let navigate=useNavigate()
  const cust=localStorage.getItem('customerid')
  useEffect(() => {
    axios
      .post("http://localhost:3000/GirlsFashion")
      .then((a) => {
        if (a.data.GirlsFashion != undefined) {
          setGirlsfashion(a.data.GirlsFashion);
          setFilteredItems(a.data.GirlsFashion);
        }
        console.log(a.data);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  const setsearchfn = (e) => {
    const filtereddata = Girlsfashion.filter((item) => {
      return item.ProductName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(filtereddata);
    if (filtereddata.length == 0) {
      setFilteredItems([]);
    } else {
      setFilteredItems(filtereddata);
    }
  };

  const click=(id)=>{
    if(cust !=null){
    axios.post(`http://localhost:3000/cart/${cust}/${id}`) 
    .then((a)=>{
      console.log(a)
      alert('Product add to cart sucessfully')
    }) 
    .catch((b)=>{
      console.log(b)
      if(b.response.data.status==500){
        alert('The product already is in your Cart !!!!')
      }
    })
  }
  else{
    alert('please login')
    navigate('/UserLogin')
  }  
}
  return (
    <div>
      <div className="hstyle">
        <h4>GIRLS CLOTHES AND FASHION</h4>
      </div>

      <div className="boyscarousel">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={girls1} class="d-block w-100 sliderimg" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={girls2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={girls3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={girls4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={girls5} class="d-block w-100" alt="..." />
            </div>
          </div>
          <br/>
          <hr/>
          <form
        class="d-flex"
        role="search"
        style={{ width: "500px", margin: "20px auto" }}
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search for products"
          aria-label="Search"
          onChange={setsearchfn}
        />
      </form>
          
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

      <div class="container text-center" style={{ marginTop: "5rem" }}>
        <div class="row">
          {filteredItems.length ? (
            filteredItems.map((e) => {
              return (
                <div class="col-3">
                  <div
                    class="card"
                    style={{ width: "18rem", marginTop: "2rem" }}
                  >
                    <img
                      src={`http://localhost:3000/${e.Image.filename}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-title">{e.ProductName}</p>
                      <p class="card-title">{"₹"+e.Price}</p>
                    </div>
                    {/* <ul class="list-group list-group-flush">
                      <li class="list-group-item">{"$"+e.Price}</li>
                      <li class="list-group-item">{"Size"+e.ProductSize}</li>
                     
                    </ul> */}
                    <div class="card-body">
                     <button className="add"  onClick={()=>{click(e._id)}}>Add To Cart</button>
                     {/* <button className="buy" onClick={()=>{navigate('/UserLogin')}}>BUY NOW</button> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : 
            <div class="col-12">
              <div class="card" style={{ marginTop: "2rem" }}>
                <div class="card-body">
                  <h5 class="card-title">No Data to display</h5>
                </div>
              </div>
            </div>}
          
        </div>
      </div>
    </div>
  );
}

export default GirlsFasion;
