import React from "react";
import "../css/Card.css";
import first from "../images/first.jpg";
import third from "../images/third.jpg";
import fourth from "../images/fourth.jpg"
import second from "../images/second.jpg";
function LabCard() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 my-3">
          <div class="row">
            <div class="col-md-7">
              <div class="cardbr">
                <div class="lic">
                <img src={first}/>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="cardbr">
                <div class="lic">
                <img src={second}/>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-5">
              <div class="cardbr">
                <div class="lic">
                <img src={third}/>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="cardbr">
                <div class="lic">
                <img src={fourth}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabCard;
