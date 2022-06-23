import React from "react";
import Teamclass from "../css/Teamclass.css";

import data from "../constants/data";
import Card from "../components/Card";

function Team() {
  console.log(data);
  return (
    <>
      <h4 class="note text-danger text-center">
        *Note: Use Photos with Transparent Background
      </h4>

      <section>

        <div class="container">
          <div class="row flex-center sm-no-flex">
            <div class="pull-right sm-no-float col-md-8">
              <ul class="team-members">
                {data.map((data) => (
                  <Card obj={data} />
                ))}
              </ul>
            </div>

            <div class="pull-left col-md-4 sm-text-center">
              <div class="team-overview">
                <h2>Who Are We?</h2>
                <a href="#">Meet the Entire Team</a>
                <p>
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci quae nesciunt officia! Autem, nam eum voluptatem,
                    esse voluptatibus deleniti tempora laboriosam sequi
                    pariatur, explicabo itaque. Fuga, deserunt? Repudiandae,
                    neque qui.
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
