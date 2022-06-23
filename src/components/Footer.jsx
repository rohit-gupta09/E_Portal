import React from "react";
import logo from "../images/logo.png";
function Footer() {
  return (
    <div className="footer" >
      <div className="container-fluid">
        <hr />
        <div className="row my-2">
          <div className="col-md-2 mx-2 col-sm-4">
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
          <div className="col-md-4">
            <div className="xyz" style={{paddingTop:"10px"}}>
              <u>Visit Us</u>
              <div className="address">
                <div>Department of Electronics & Communication Enginnering</div>
                <div>IIT Roorkee</div>
                <div>Uttrakhand,India</div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="xyz" style={{paddingTop:"10px"}}> 
              <u>Links to Visit</u>
              <div>
                <a href="/">Contact US</a>
              </div>
              <div>
                <a href="/">IIT Roorkee</a>
              </div>
              <div>
                <a href="/">Articles</a>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <br />
            <div className="address">
              <ul className="ul" type="none">
                <li>
                  <a>
                    <i style={{fontSize:"30px"}} class="fa-solid fa-phone"></i>
                    <p>01332-284417</p>
                  </a>
                </li>
                <br />
                <li>
                  <a className="align-items-center">
                    <i style={{fontSize:"30px"}} class="fa-solid fa-envelope"></i>
                    <p>info.dirghadhi@gmail.com</p>
                  </a>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed/v1/view
  ?key=AIzaSyCbWNEuMrnv9dEyzwtdE8sqyYoMVcgraBE
  &center=29.87, 77.88
  &zoom=18
  &maptype=satellite"
              title="cjj"
              style={{ border: "0", width: "100%", height: "204px" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <br />
        <div className="row">
          <hr />
        </div>
      </div>
      <center className="handw">Copyright © 2022 - All Rights Reserved</center>
    </div>
  );
}

export default Footer;
