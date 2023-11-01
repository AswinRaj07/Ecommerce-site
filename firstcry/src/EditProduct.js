import React, { useEffect, useState } from "react";
import AddProductstyle from "./AddProductstyle.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [productdetail, setProductdetails] = useState({
    ProductName: "",
    Price: "",
    Image: "",
    ProductSize: "",
    Category: "",
  });

  useEffect(() => {
    axios
      .post(`http://localhost:3000/viewProductById/${id}`)
      .then((a) => {
        console.log(a.data.Data);
        setProductdetails(a.data.Data);
      })
      .catch((b) => {
        console.log(b);
      });
  }, []);

  const change = (e) => {
    if (e.target.name === "Upload") {
      setProductdetails({ ...productdetail, Upload: e.target.files[0] });
    } else {
      setProductdetails({ ...productdetail, [e.target.name]: e.target.value });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(productdetail);
    axios
      .post(`http://localhost:3000/editproduct/${id}`, productdetail,
       {
        headers: { "Content-Type": "multipart/form-data" },
      }
      )
      .then((a) => {
        console.log(a.data)
        if (a.data.status == 200) {
          console.log(a.data);
          alert("Data added sucessfully");
        }
      })
      .catch((b) => {
        console.log(b);
        alert("Error");
      });
  };
  return (
    <div>
      <form className="addform " onSubmit={submit}>
        <div class="input-group firstinput">
          <span class="input-group-text">Product Name</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            required
            value={productdetail.ProductName}
            name="ProductName"
            onChange={change}
          />
          {}
        </div>

        <div class="input-group mb-3 seperateinput">
          <span class="input-group-text">Price$</span>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            required
            value={productdetail.Price}
            name="Price"
            onChange={change}
          />
          <span class="input-group-text">.00</span>
        </div>

        <div class="input-group mb-3 seperateinput">
          <input
            type="file"
            class="form-control"
            id="inputGroupFile02"
           
            name="Upload"
            //  value={productdetail.Image}
            onChange={change}
          />
          <label class="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>

        <div class="input-group seperateinput">
          <span class="input-group-text">Product Size</span>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            value={productdetail.ProductSize}
            required
            name="ProductSize"
            onChange={change}
          />
        </div>

        <select
          class="form-select form-select-lg mb-3 category "
          required
          aria-label=".form-select-lg example"
          name="Category"
          value={productdetail.Category}
          onChange={change}
        >
          <option selected value="">
            Category
          </option>
          <option value="BoysFashion" name="Category">
            Boys Fashion
          </option>
          <option value="GirlsFashion" name="Category">
            Girls Fashion
          </option>
          <option value="FootWear" name="Category">
            Footwear
          </option>
          <option value="Toys" name="Category">
            Toys
          </option>
          <option value="Health" name="Category">
            Health
          </option>
        </select>

        <button
          type="submit"
          class="btn btn-primary btn-lg addbutton p-3 mb-2 bg-success text-white"
        >
         
          ADD
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
