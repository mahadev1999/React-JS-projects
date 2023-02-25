import React from "react";
import './box.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export function Box(){
    return(
       <div className="container1 p-5">
        <h1>Boxes</h1>
            <div className="d-flex justify-content-around ">
                <div className="bg-primary abc1  ">
             
                         <h3 className="te">small</h3>
        
                </div>
                <div className="bg-secondary abc2 ">
                  
                         <h3 className="te">medium</h3>
               
                </div>
                <div className="bg-warning abc3">
              
                         <h3 className="te">large</h3>
              
                </div>
             </div>




             








       </div> 
      
    );
}