import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Toys() {
  const navigate=useNavigate()
  const [toys,settoys]=useState([]);
  const cust=localStorage.getItem('customerid')
  useEffect(()=>{
    axios.post("http://localhost:3000/Toys")
    .then((a)=>{
      if(a.data.Toys !=undefined){
        settoys(a.data.Toys)
      }
      console.log(a.data)
    })
    .catch((b)=>{
      console.log(b)
    })
  },[])

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
    }else{
      alert('Please Login')
      navigate('/UserLogin')
    }
  }

  return (
    <div>
      <div className="hstyle">
        <h4>Toys</h4>
      </div>

      <div className="griddiv">
        <div class="container text-center">
          <div class="row">
            {toys.length? (toys.map((e)=>{return(
            <div class="col-3">
              <div class="card" style={{ width: "18rem",marginTop: "2rem" }}>
                <img src={`http://localhost:3000/${e.Image.filename}`} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-title">{e.ProductName}</p>
                  <p class="card-title">{"₹"+e.Price}</p>
                </div>
               
                <div class="card-body">
                <button className="add" onClick={()=>{click(e._id)}}>Add To Cart</button>
                </div>
              </div>
            </div>
            )})) : <div class="col-12">
            <div class="card" style={{ marginTop: "2rem" }}>
              <div class="card-body">
                <h5 class="card-title">No Data to display</h5>
              </div>
            </div>
          </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toys;
