import React from "react";
import './superover.css';
import royal from './royal.jpg'
import chennai from './chennai.jpg'


export function League(){
    return(
        <div >
        <div className="c1">
        <h1 className="h1">Super Over League</h1>
         
        <div>
        <img src={royal} className="img1 "></img>
        

        
        <img src={chennai} className="img2"></img>
        </div>

        </div>



        </div>
    );
}