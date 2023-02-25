import React from "react";
import './figma.css';

export function Figma(){
    return(
      <div>
        <form>
            <label>Student management system</label><br/><br/>
            <input type="text" name="search" placeholder="search"/>
            <input type="button" value="add"/>
        </form>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Education</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                
                
            </table>
        </div>
        
        
      </div>  
    );
}