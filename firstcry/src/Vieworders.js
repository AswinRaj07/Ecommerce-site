import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

function Vieworders() {
    const [viewordes,setorder]=useState([{}]);
    const [test,settest]=useState('')
       

    useEffect(()=>{
        axios.post('http://localhost:3000/viewAllorders')
        .then((a)=>{
            console.log(a) 
            if(a.data.AllProducts != undefined){
               setorder(a.data.AllProducts) 
               settest('hello')
            }
        })
        .catch((b)=>{
           console.log(b)
        })
    },[]);
  return (
    <div>
        <div class='row' style={{marginTop:'5rem'}}>
        {test.length?viewordes.map((e)=>{
            return(
                <div class='col-3'>
                <div class="card" style={{width: "25rem;"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">{"OrderId:"+e._id}</p>
              <p class="card-text">{'₹'+e.Totalprice}</p>
              <p class="card-text">{"ProductId:"+e.productid}</p>
              <p class="card-text">{"CustomerId:"+e.customerid}</p>
              <p class="card-text">{"Productcount:"+e.count}</p>
              <p class="card-text">{"OrderDate:"+e.date}</p>
            </div>
          </div>
          </div>
            )
        }):null}
       </div>
    </div>
  )
}

export default Vieworders
