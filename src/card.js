import React from "react";
import card1 from './card1.png'
import card2 from './card2.png'
import watch from './watch.png'
import './card.css';

export function Card(){
    return(
        <div>
        <h1 className="te1">Congratulations</h1>
        <div className="c1">
        <img src={card2} className="im2"></img>
        <div className="h1">
        <h1>Kiran.V</h1>
        </div>
        
        <div className="h2">
        <h2>KGISL Institute of technology</h2>
        
        <img src={watch} className="im3"></img>
        </div>
    
      
        </div>
        <img src={card1} className="im"></img>
        
      
      
      
      
      
      
      
      
      
        </div>
    
    );
}