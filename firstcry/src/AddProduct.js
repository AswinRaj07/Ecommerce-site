import React, { useEffect, useState, useParams } from "react";
import AddProductstyle from "./AddProductstyle.css";
import axios from "axios";
function AddProduct() {
  const [addProduct, setProduct] = useState({
    ProductName: "",
    Price: "",
    Upload: null,
    ProductSize: "",
    Category: "",
  });
  const change = (e) => {
    if (e.target.name === "Upload") {
      setProduct({ ...addProduct, Upload: e.target.files[0] });
    } else {
      setProduct({ ...addProduct, [e.target.name]: e.target.value });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(addProduct);
    axios
      .post("http://localhost:3000/AddProduct", addProduct, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((a) => {
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
            value={addProduct.Price}
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
            required
            name="Upload"
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
            value={addProduct.ProductSize}
            // required
            name="ProductSize"
            onChange={change}
          />
        </div>

        <select
          class="form-select form-select-lg mb-3 category "
          required
          aria-label=".form-select-lg example"
          name="Category"
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

export default AddProduct;








