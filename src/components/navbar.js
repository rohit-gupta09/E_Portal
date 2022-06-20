import React from "react";
import "../css/navbar.css";
export default function Navbar() {
  return (
    <div className="row justify-content-center d1">
      <div className="col-10">
        <nav class="navbar navbar-expand-lg c2">
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{color:"#ffffff"}}>
              IIT Portal
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{backgroundColor:"white",color:"white"}}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" style={{color:"#ffffff"}}>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"#ffffff"}}>
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"#ffffff"}}>
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{color:"#ffffff"}}>
                    world
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}