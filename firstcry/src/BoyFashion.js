import React, { useEffect } from "react";
import { useState } from "react";
import "./BoysFashionStyle.css";
import boys1 from "./Images/boys1.jpg";
import boys2 from "./Images/boys2.jpg";
import boys3 from "./Images/boys3.jpg";
import boys4 from "./Images/boys4.jpg";
import boys5 from "./Images/boys5.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function BoyFashion() {
  const [Boysfashion, setBoysfashion] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);



  let navigate=useNavigate()
  const cust=localStorage.getItem('customerid')
  useEffect(() => {
    axios
      .post("http://localhost:3000/BoysFashion")
      .then((a) => {
        console.log(a);
        if (a.data.BoysFashion != undefined) {
          setBoysfashion(a.data.BoysFashion);
          setFilteredItems(a.data.BoysFashion);
        }
        console.log(a.data);
      })
      .catch((b) => {
        console.log(b);
       
      });
  }, []);

  const setsearchfn = (e) => {
    const filtereddata = Boysfashion.filter((item) => {
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
    alert('Please Login')
    navigate('/UserLogin')
  }
}
  return (
    <div className="boysmaindiv ">
      <div className="hstyle">
        <h4>BOYS CLOTHES AND FASHION</h4>
        <form
        class="d-flex"
        role="search"
        style={{ width: "500px", margin: "20px auto" ,position:"relative", bottom:'3rem'}}
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search for products"
          aria-label="Search"
          onChange={setsearchfn}
        />
      </form>
      </div>
     
     
     
      <div className="boyscarousel">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={boys1} class="d-block w-100 sliderimg" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={boys2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={boys3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={boys4} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={boys5} class="d-block w-100" alt="..." />
            </div>
          </div>
<br/>
        
        

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
                 
                  <div class="card" style={{ marginTop: "2rem" }}>
                  <Link className="linkstyle" to={`/BoysDetail/${e._id}`}>
                   <img
                      src={`http://localhost:3000/${e.Image.filename}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      {/* <h5 class="card-title">{e.ProductName}</h5> */}
                      <p class="card-text">{e.ProductName}{e.Price}</p> 
                      <p class="card-text">{"₹"+e.Price}</p>
                     
                    </div>
                   </Link>
                    <div class="card-body">
                       <button className="add"  onClick={()=>{click(e._id)}}>Add To Cart</button>   
                      {/* <button className="buy" onClick={()=>{navigate('/UserLogin')}}>Buy Now</button>  */}
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

export default BoyFashion;
