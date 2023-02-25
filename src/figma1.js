import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export function Maha(){
    return(
        <div> 
            <h1>Add Student Details</h1><br/>

            
                <form>
                    <div className="container">
                    <div className="row justify-content-around">
                
                    <div className="col-lg-4">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter a first name"/><br/><br/>
                    <label>Email</label>
                    <input type="Email" placeholder="Enter a mail"/><br/><br/>
                    <label>Education</label>
                    <input type="text" placeholder="Enter a education"/><br/><br/>
                    </div>
                    
                    
                    

                     
                    <div className="col-lg-4">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter a first name"/><br/><br/>
                    <label>DOB </label>
                    <input type="date" placeholder="enter a date"/><br/><br/>
                    <label>Location</label>
                    <input type="text" placeholder="Enter a  location"/><br/><br/>
                    </div>
                    </div>
                     </div>
                

                    <div className="col-lg-8 row">
                        <label>About:</label>
                        <textarea type="text" placeholder="enter your details"/>
                    </div>
                    <input type="submit" value="submit"/>
                    
                </form>
                
            </div>
        

      
        
    );
}