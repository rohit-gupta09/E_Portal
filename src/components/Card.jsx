import React from 'react'

import Teamclass from "../css/Teamclass.css";



function Card(props) {
  return (
   


    <li class="clearfix">
    <div class="member-details">
        <div>
            <img src="https://axis.org/wp-content/uploads/2014/10/chris-headshot.png" alt="UI Designer"/>
            <div class="member-info">
                <h3>{props.obj.one.name}</h3>
                <p>{props.obj.one.Role}</p>
            </div>
        </div>
    </div>
    
    <div class="member-details">
        <div>
            <img src="https://axis.org/wp-content/uploads/2014/12/jeremiah-e1418073411753.png" alt="UI Designer"/>
            <div class="member-info">
            <h3>{props.obj.two.name}</h3>
                <p>{props.obj.two.Role}</p>
            </div>
        </div>
    </div>
    
    <div class="member-details">
        <div>
            <img src="https://i.postimg.cc/50n49xjb/888-8883444-headshot-no-background-scarf.png" alt="UI Designer"/>
            <div class="member-info">
            <h3>{props.obj.three.name}</h3>
                <p>{props.obj.three.Role}</p>
            </div>
        </div>
    </div>
    </li>

		
   
  );
}

export default Card;