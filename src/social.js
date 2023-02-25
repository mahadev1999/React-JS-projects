import React from "react";
import './social.css';
import solar from './solar.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export function Buttons(){
    return(
        <div className="all">
          
          <p className="p1">SOCIAL BUTTONS</p>
          <input type={"button"} value="LIKE"className="bg-warning n1"/>
          <input type={"button"} value="COMMENT" className="bg-light n2"/>
          <input type={"button"} value="SHARE" className="bg-info n3"/>

            

        </div>
    );
}