import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Heaterstyle from "./Headerstyle.css";

function Header() {
  const navigate=useNavigate()
  return (
    <div>
      <div class="bg-warning p-2 text-dark bg-opacity-100">
        <nav class="navbar navbar-expand-lg bg-body-warning">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/Home"
                    style={{ color: "black" }}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="./BoysFashion"
                  >
                    Boy Fashion
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="./GirlsFashion"
                  >
                    Girl Fashion
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./Toys">
                    Toys
                  </a>
                </li>
                <li class="nav-item">
                  <Link
                    class="bi bi-cart-fill carticon "
                    style={{ color: "black" }}
                    to="/Cart"
                  >
                    cart
                  </Link>
                </li>
              </ul>

              {/* <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-warning"
                  type="submit"
                  style={{ color: "black" }}
                >
                  Search
                </button>
              </form> */}
              <Link to='/UserLogin' class="btn btn-outline logoutbtn">LogIn/Register</Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
