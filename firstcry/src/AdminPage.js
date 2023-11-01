import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function AdminPage() {
  return (
    <div class="bg-success p-2 text-dark bg-opacity-50">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/AddProduct">
            Add Product
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewallProduct">
            View All Product
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Viewordes">
            View Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminPage;
